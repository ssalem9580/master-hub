"use client";

import { useEffect, useMemo, useState } from "react";

type Part = { id:string; name:string; partNumber:string; compatibleWith:string; cost:number };
type SavedPackage = { id:string; name:string; symptom:string; parts:Part[]; createdAt:string };

const PARTS_KEY = "master-hub:parts-library:v1";
const PACKAGES_KEY = "master-hub:repair-packages:v1";

const money = (value:number) => value.toLocaleString("en-US", { style:"currency", currency:"USD" });
const clean = (value:string) => value.trim().replace(/^['\"]|['\"]$/g, "");
const costValue = (value:string) => Number(value.replace(/[$,]/g, "")) || 0;

function parseRows(text:string):Part[] {
  const lines = text.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
  if (!lines.length) return [];
  const delimiter = lines.some(l=>l.includes("\t")) ? "\t" : ",";
  const cells = lines.map(line => line.split(delimiter).map(clean));
  const header = cells[0].map(x=>x.toLowerCase());
  const find = (...names:string[]) => header.findIndex(h => names.some(n => h.includes(n)));
  const nameI = find("part name","description","name");
  const numberI = find("part #","part#","part number","part no","pn");
  const compatI = find("compatible","model","equipment","applies to");
  const costI = find("cost","price","unit cost");
  const hasHeader = [nameI,numberI,compatI,costI].some(i=>i>=0);
  const data = hasHeader ? cells.slice(1) : cells;
  return data.map((row,idx)=>({
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${idx}`,
    name: row[nameI>=0?nameI:0] || "",
    partNumber: row[numberI>=0?numberI:1] || "",
    compatibleWith: row[compatI>=0?compatI:2] || "",
    cost: costValue(row[costI>=0?costI:3] || "0")
  })).filter(p=>p.name || p.partNumber);
}

export default function RepairPackagesPage(){
  const [library,setLibrary]=useState<Part[]>([]);
  const [selected,setSelected]=useState<Part[]>([]);
  const [saved,setSaved]=useState<SavedPackage[]>([]);
  const [packageName,setPackageName]=useState("");
  const [symptom,setSymptom]=useState("");
  const [search,setSearch]=useState("");
  const [paste,setPaste]=useState("");
  const [draft,setDraft]=useState({name:"",partNumber:"",compatibleWith:"",cost:""});
  const [notice,setNotice]=useState("");

  useEffect(()=>{
    try{ setLibrary(JSON.parse(localStorage.getItem(PARTS_KEY)||"[]")); }catch{}
    try{ setSaved(JSON.parse(localStorage.getItem(PACKAGES_KEY)||"[]")); }catch{}
  },[]);
  useEffect(()=>{ localStorage.setItem(PARTS_KEY,JSON.stringify(library)); },[library]);
  useEffect(()=>{ localStorage.setItem(PACKAGES_KEY,JSON.stringify(saved)); },[saved]);

  const total = useMemo(()=>selected.reduce((sum,p)=>sum+p.cost,0),[selected]);
  const filtered = useMemo(()=>{
    const q=search.trim().toLowerCase();
    if(!q)return library;
    return library.filter(p=>`${p.name} ${p.partNumber} ${p.compatibleWith}`.toLowerCase().includes(q));
  },[library,search]);

  const flash=(m:string)=>{setNotice(m);setTimeout(()=>setNotice(""),1800)};
  const addManual=()=>{
    if(!draft.name.trim() && !draft.partNumber.trim())return;
    setLibrary(x=>[{id:crypto.randomUUID(),name:draft.name.trim(),partNumber:draft.partNumber.trim(),compatibleWith:draft.compatibleWith.trim(),cost:costValue(draft.cost)},...x]);
    setDraft({name:"",partNumber:"",compatibleWith:"",cost:""});
    flash("Part added");
  };
  const importText=()=>{
    const rows=parseRows(paste);
    if(!rows.length){flash("No parts detected");return;}
    setLibrary(existing=>{
      const seen=new Set(existing.map(p=>`${p.partNumber}|${p.name}|${p.compatibleWith}`.toLowerCase()));
      return [...existing,...rows.filter(p=>!seen.has(`${p.partNumber}|${p.name}|${p.compatibleWith}`.toLowerCase()))];
    });
    setPaste("");
    flash(`${rows.length} rows compiled`);
  };
  const addToPackage=(part:Part)=>setSelected(x=>x.some(p=>p.id===part.id)?x:[...x,part]);
  const savePackage=()=>{
    if(!packageName.trim() || !selected.length){flash("Add package name and parts");return;}
    setSaved(x=>[{id:crypto.randomUUID(),name:packageName.trim(),symptom:symptom.trim(),parts:selected,createdAt:new Date().toISOString()},...x]);
    flash("Repair package saved");
  };
  const copyTable=async()=>{
    const lines=["PART NAME\tPART #\tCOMPATIBLE WITH\tCOST",...selected.map(p=>`${p.name}\t${p.partNumber}\t${p.compatibleWith}\t${money(p.cost)}`),`\t\tTOTAL\t${money(total)}`];
    await navigator.clipboard.writeText(lines.join("\n"));
    flash("Compiled table copied");
  };

  return <main style={{minHeight:"100vh",background:"#080b12",color:"#f4f4f7",fontFamily:"Arial,sans-serif",padding:"24px"}}>
    <div style={{maxWidth:1500,margin:"0 auto",display:"grid",gap:16}}>
      <header style={{display:"flex",justifyContent:"space-between",gap:16,alignItems:"end",flexWrap:"wrap"}}>
        <div><div style={{fontSize:11,letterSpacing:".14em",color:"#7d8596",fontWeight:800}}>FIELD RESOURCE HUB</div><h1 style={{margin:"6px 0",fontSize:30}}>Repair Packages & Rebuild Kits</h1><p style={{margin:0,color:"#8c94a5"}}>Compile parts into repeatable repair packages. Standard output: Part Name · Part # · Compatible With · Cost.</p></div>
        <a href="/" style={{color:"#a99eff",textDecoration:"none",fontWeight:700}}>← Master Hub</a>
      </header>

      {notice&&<div style={{position:"fixed",right:24,bottom:24,zIndex:20,background:"#171d29",border:"1px solid #343d50",borderRadius:9,padding:"10px 14px"}}>{notice}</div>}

      <section style={{display:"grid",gridTemplateColumns:"minmax(320px,.8fr) minmax(0,1.5fr)",gap:16}}>
        <div style={panel}>
          <h2 style={h2}>Parts Library Importer</h2>
          <p style={muted}>Paste CSV, tab-separated spreadsheet rows, or a four-column parts list. Headers are detected automatically.</p>
          <textarea value={paste} onChange={e=>setPaste(e.target.value)} placeholder={'PART NAME\tPART #\tCOMPATIBLE WITH\tCOST\nDoor Motor\t123456\tVAT 21\t245.00'} style={{...input,minHeight:170,resize:"vertical"}} />
          <button onClick={importText} style={primary}>Compile & Import Parts</button>
          <div style={{height:1,background:"#252c39",margin:"16px 0"}}/>
          <h3 style={{margin:"0 0 10px",fontSize:13}}>Add one part</h3>
          <div style={{display:"grid",gap:8}}>
            <input value={draft.name} onChange={e=>setDraft({...draft,name:e.target.value})} placeholder="Part name" style={input}/>
            <input value={draft.partNumber} onChange={e=>setDraft({...draft,partNumber:e.target.value})} placeholder="Part #" style={input}/>
            <input value={draft.compatibleWith} onChange={e=>setDraft({...draft,compatibleWith:e.target.value})} placeholder="Compatible with" style={input}/>
            <input value={draft.cost} onChange={e=>setDraft({...draft,cost:e.target.value})} placeholder="Cost" inputMode="decimal" style={input}/>
            <button onClick={addManual} style={secondary}>Add to Parts Library</button>
          </div>
        </div>

        <div style={panel}>
          <div style={{display:"flex",justifyContent:"space-between",gap:12,alignItems:"center",marginBottom:12}}><h2 style={h2}>Parts Library</h2><strong>{library.length} parts</strong></div>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search part name, number, or compatible equipment" style={{...input,marginBottom:10}}/>
          <div style={{overflow:"auto",maxHeight:430,border:"1px solid #252c39",borderRadius:10}}>
            <table style={table}><thead><tr>{["PART NAME","PART #","COMPATIBLE WITH","COST",""].map(x=><th key={x} style={th}>{x}</th>)}</tr></thead><tbody>
              {filtered.map(p=><tr key={p.id}><td style={td}>{p.name}</td><td style={td}>{p.partNumber}</td><td style={td}>{p.compatibleWith}</td><td style={{...td,textAlign:"right"}}>{money(p.cost)}</td><td style={td}><button onClick={()=>addToPackage(p)} style={mini}>Add</button></td></tr>)}
              {!filtered.length&&<tr><td colSpan={5} style={{...td,textAlign:"center",color:"#7d8596",padding:30}}>No matching parts</td></tr>}
            </tbody></table>
          </div>
        </div>
      </section>

      <section style={panel}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr auto",gap:10,alignItems:"end",marginBottom:12}}>
          <label style={label}>PACKAGE NAME<input value={packageName} onChange={e=>setPackageName(e.target.value)} placeholder="VAT21-DOOR-FULL" style={input}/></label>
          <label style={label}>FAILURE / SYMPTOM<input value={symptom} onChange={e=>setSymptom(e.target.value)} placeholder="VAT 21 door does not work" style={input}/></label>
          <div style={{display:"flex",gap:8}}><button onClick={copyTable} style={secondary}>Copy Table</button><button onClick={savePackage} style={primary}>Save Package</button></div>
        </div>
        <div style={{overflow:"auto",border:"1px solid #252c39",borderRadius:10}}>
          <table style={table}><thead><tr>{["PART NAME","PART #","COMPATIBLE WITH","COST",""] .map(x=><th key={x} style={th}>{x}</th>)}</tr></thead><tbody>
            {selected.map(p=><tr key={p.id}><td style={td}>{p.name}</td><td style={td}>{p.partNumber}</td><td style={td}>{p.compatibleWith}</td><td style={{...td,textAlign:"right"}}>{money(p.cost)}</td><td style={td}><button onClick={()=>setSelected(x=>x.filter(i=>i.id!==p.id))} style={mini}>Remove</button></td></tr>)}
            {!selected.length&&<tr><td colSpan={5} style={{...td,textAlign:"center",padding:28,color:"#7d8596"}}>Add parts from the library to compile a repair package.</td></tr>}
          </tbody><tfoot><tr><td style={totalLabel} colSpan={3}>RUNNING TOTAL</td><td style={totalCost}>{money(total)}</td><td style={td}/></tr></tfoot></table>
        </div>
      </section>

      <section style={panel}>
        <h2 style={h2}>Saved Repair Packages</h2>
        <div style={{display:"grid",gap:10}}>{saved.map(pkg=><button key={pkg.id} onClick={()=>{setPackageName(pkg.name);setSymptom(pkg.symptom);setSelected(pkg.parts);flash("Package loaded")}} style={{...secondary,textAlign:"left",height:"auto",padding:12,display:"grid",gridTemplateColumns:"1fr auto",gap:8}}><span><strong>{pkg.name}</strong><small style={{display:"block",color:"#7d8596",marginTop:4}}>{pkg.symptom||"No symptom entered"}</small></span><strong>{money(pkg.parts.reduce((s,p)=>s+p.cost,0))}</strong></button>)}{!saved.length&&<p style={muted}>No saved packages yet.</p>}</div>
      </section>
    </div>
  </main>;
}

const panel:React.CSSProperties={background:"linear-gradient(145deg,#121722,#0f141d)",border:"1px solid #242b39",borderRadius:13,padding:16};
const h2:React.CSSProperties={margin:"0 0 10px",fontSize:17};
const muted:React.CSSProperties={margin:"0 0 12px",fontSize:12,color:"#8c94a5",lineHeight:1.5};
const input:React.CSSProperties={width:"100%",background:"#0c1018",border:"1px solid #303849",borderRadius:8,color:"#fff",padding:"10px 11px",fontSize:12,outline:"none"};
const primary:React.CSSProperties={border:"1px solid #8879ed",background:"#7768dc",color:"#fff",borderRadius:8,padding:"10px 13px",fontWeight:750,cursor:"pointer"};
const secondary:React.CSSProperties={border:"1px solid #303746",background:"#121823",color:"#d8dbe2",borderRadius:8,padding:"10px 13px",fontWeight:700,cursor:"pointer"};
const mini:React.CSSProperties={...secondary,padding:"5px 8px",fontSize:10};
const table:React.CSSProperties={width:"100%",borderCollapse:"collapse",minWidth:760};
const th:React.CSSProperties={position:"sticky",top:0,background:"#111722",borderBottom:"1px solid #303849",padding:"9px 10px",textAlign:"left",fontSize:10,color:"#8c94a5",letterSpacing:".08em"};
const td:React.CSSProperties={borderBottom:"1px solid #202632",padding:"8px 10px",fontSize:12};
const totalLabel:React.CSSProperties={...td,textAlign:"right",fontWeight:850,letterSpacing:".08em",color:"#a99eff"};
const totalCost:React.CSSProperties={...td,textAlign:"right",fontSize:16,fontWeight:900,color:"#fff"};
const label:React.CSSProperties={display:"grid",gap:6,fontSize:10,fontWeight:800,letterSpacing:".08em",color:"#7d8596"};
