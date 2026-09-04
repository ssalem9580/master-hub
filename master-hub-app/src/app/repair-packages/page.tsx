"use client";

import { useEffect, useMemo, useState } from "react";

type Part = {
  id:string;
  name:string;
  partNumber:string;
  compatibleWith:string;
  gls:string;
  cost:number;
  glsCost:number;
  listPrice:number;
  source:string;
};
type SavedPackage = { id:string; name:string; symptom:string; parts:Part[]; createdAt:string };
type Suggestion = { part:Part; reasons:string[]; score:number };

const PARTS_KEY = "master-hub:parts-library:v2";
const LEGACY_PARTS_KEY = "master-hub:parts-library:v1";
const PACKAGES_KEY = "master-hub:repair-packages:v1";
const money = (value:number) => value.toLocaleString("en-US", { style:"currency", currency:"USD" });
const clean = (value:string) => value.trim().replace(/^['\"]|['\"]$/g, "");
const numberValue = (value:string) => Number(String(value||"").replace(/[$,()]/g, m=>m==="("?"-":m===")"?"":"")) || 0;

const families = [
  {label:"Motor / drive", words:["motor","drive","actuator","gear","gearbox"]},
  {label:"Gasket / seal", words:["gasket","seal","weatherstrip","o-ring","oring"]},
  {label:"Microphone", words:["microphone","mic"]},
  {label:"Membrane", words:["membrane","diaphragm"]},
  {label:"Speaker", words:["speaker","transducer"]},
  {label:"Harness / wiring", words:["harness","wire","wiring","cable","connector"]},
  {label:"Hardware", words:["hardware","bracket","mount","screw","bolt","nut","washer","clip"]},
  {label:"Switch / sensor", words:["switch","sensor","limit","reed"]},
  {label:"Roller / track", words:["roller","track","bearing","guide","slide"]},
];

function parseDelimited(line:string, delimiter:string){
  if(delimiter==="\t") return line.split("\t").map(clean);
  const out:string[]=[]; let cur=""; let quoted=false;
  for(let i=0;i<line.length;i++){
    const ch=line[i];
    if(ch==='"' && line[i+1]==='"'){cur+='"';i++;continue;}
    if(ch==='"'){quoted=!quoted;continue;}
    if(ch===delimiter && !quoted){out.push(clean(cur));cur="";continue;}
    cur+=ch;
  }
  out.push(clean(cur)); return out;
}

function parseRows(text:string):Part[] {
  const lines = text.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
  if (!lines.length) return [];
  const delimiter = lines.some(l=>l.includes("\t")) ? "\t" : ",";
  const cells = lines.map(line => parseDelimited(line,delimiter));
  const header = cells[0].map(x=>x.toLowerCase().replace(/[_-]+/g," ").trim());
  const find = (...names:string[]) => header.findIndex(h => names.some(n => h===n || h.includes(n)));
  const nameI = find("part name","description","item description","name");
  const numberI = find("part #","part#","part number","part no","partnum","pn","item number");
  const compatI = find("compatible with","compatible","model","equipment","applies to","machine");
  const glsI = find("gls","gls code","gls number","gls #");
  const costI = find("unit cost","part cost","dealer cost","standard cost","cost");
  const glsCostI = find("gls cost","gls price","gls unit cost");
  const listPriceI = find("list price","sell price","retail price","price");
  const sourceI = find("source","vendor","supplier");
  const hasHeader = [nameI,numberI,compatI,glsI,costI,glsCostI,listPriceI,sourceI].some(i=>i>=0);
  const data = hasHeader ? cells.slice(1) : cells;
  return data.map((row,idx)=>({
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${idx}`,
    name: row[nameI>=0?nameI:0] || "",
    partNumber: row[numberI>=0?numberI:1] || "",
    compatibleWith: row[compatI>=0?compatI:2] || "",
    gls: glsI>=0 ? (row[glsI]||"") : "",
    cost: numberValue(row[costI>=0?costI:3] || "0"),
    glsCost: glsCostI>=0 ? numberValue(row[glsCostI]||"0") : 0,
    listPrice: listPriceI>=0 ? numberValue(row[listPriceI]||"0") : 0,
    source: sourceI>=0 ? (row[sourceI]||"") : "bulk import"
  })).filter(p=>p.name || p.partNumber || p.gls);
}

function normalizePart(raw:any):Part{
  return {
    id: raw.id || crypto.randomUUID(),
    name: raw.name || "",
    partNumber: raw.partNumber || "",
    compatibleWith: raw.compatibleWith || "",
    gls: raw.gls || "",
    cost: Number(raw.cost)||0,
    glsCost: Number(raw.glsCost)||0,
    listPrice: Number(raw.listPrice)||0,
    source: raw.source || "legacy import"
  };
}

function tokens(value:string){
  return value.toLowerCase().replace(/[^a-z0-9]+/g," ").split(/\s+/).filter(x=>x.length>1);
}
function familyFor(part:Part){
  const hay = `${part.name} ${part.compatibleWith}`.toLowerCase();
  return families.filter(f=>f.words.some(w=>hay.includes(w))).map(f=>f.label);
}
function effectiveCost(part:Part){ return part.glsCost>0 ? part.glsCost : part.cost; }

export default function RepairPackagesPage(){
  const [library,setLibrary]=useState<Part[]>([]);
  const [selected,setSelected]=useState<Part[]>([]);
  const [saved,setSaved]=useState<SavedPackage[]>([]);
  const [packageName,setPackageName]=useState("");
  const [symptom,setSymptom]=useState("");
  const [search,setSearch]=useState("");
  const [paste,setPaste]=useState("");
  const [notice,setNotice]=useState("");
  const [assistOpen,setAssistOpen]=useState(false);

  useEffect(()=>{
    try{
      const current=JSON.parse(localStorage.getItem(PARTS_KEY)||"[]");
      const legacy=JSON.parse(localStorage.getItem(LEGACY_PARTS_KEY)||"[]");
      const src=current.length?current:legacy;
      setLibrary(src.map(normalizePart));
    }catch{}
    try{ setSaved(JSON.parse(localStorage.getItem(PACKAGES_KEY)||"[]")); }catch{}
  },[]);
  useEffect(()=>{ localStorage.setItem(PARTS_KEY,JSON.stringify(library)); },[library]);
  useEffect(()=>{ localStorage.setItem(PACKAGES_KEY,JSON.stringify(saved)); },[saved]);

  const totalCost = useMemo(()=>selected.reduce((sum,p)=>sum+effectiveCost(p),0),[selected]);
  const totalList = useMemo(()=>selected.reduce((sum,p)=>sum+p.listPrice,0),[selected]);
  const pricedCount = useMemo(()=>library.filter(p=>effectiveCost(p)>0 || p.listPrice>0).length,[library]);
  const glsCount = useMemo(()=>library.filter(p=>p.gls).length,[library]);
  const filtered = useMemo(()=>{
    const q=search.trim().toLowerCase();
    if(!q)return library;
    return library.filter(p=>`${p.name} ${p.partNumber} ${p.compatibleWith} ${p.gls} ${p.source}`.toLowerCase().includes(q));
  },[library,search]);

  const selectedFamilies = useMemo(()=>new Set(selected.flatMap(familyFor)),[selected]);
  const expectedFamilies = useMemo(()=>{
    const text=`${packageName} ${symptom}`.toLowerCase();
    const wanted=new Set<string>();
    if(/door|drawer|slide|open|close|move/.test(text)) ["Motor / drive","Gasket / seal","Hardware","Switch / sensor","Roller / track"].forEach(x=>wanted.add(x));
    if(/audio|sound|speaker|mic|microphone|intercom|voice/.test(text)) ["Microphone","Membrane","Speaker","Harness / wiring"].forEach(x=>wanted.add(x));
    if(/vat\s*21|vat21/.test(text)) ["Motor / drive","Gasket / seal","Microphone","Membrane","Speaker"].forEach(x=>wanted.add(x));
    return [...wanted];
  },[packageName,symptom]);
  const missingFamilies = expectedFamilies.filter(x=>!selectedFamilies.has(x));

  const suggestions = useMemo<Suggestion[]>(()=>{
    const context=tokens(`${packageName} ${symptom}`);
    const selectedIds=new Set(selected.map(p=>p.id));
    return library.filter(p=>!selectedIds.has(p.id)).map(part=>{
      const hay=`${part.name} ${part.compatibleWith} ${part.partNumber} ${part.gls}`.toLowerCase();
      let score=0; const reasons:string[]=[];
      context.forEach(t=>{ if(hay.includes(t)){score+=3; reasons.push(`matches ${t}`);} });
      familyFor(part).forEach(f=>{ if(missingFamilies.includes(f)){score+=5; reasons.push(`fills ${f}`);} else if(expectedFamilies.includes(f)){score+=2;} });
      if(part.partNumber){score+=1;reasons.push("part # available");}
      if(part.gls){score+=1;reasons.push("GLS available");}
      if(effectiveCost(part)>0){score+=2;reasons.push("cost available");}
      if(part.listPrice>0){score+=1;reasons.push("list price available");}
      return {part,reasons:[...new Set(reasons)],score};
    }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score || a.part.name.localeCompare(b.part.name)).slice(0,50);
  },[library,selected,packageName,symptom,expectedFamilies,missingFamilies]);

  const flash=(m:string)=>{setNotice(m);setTimeout(()=>setNotice(""),2000)};
  const importText=()=>{
    const rows=parseRows(paste); if(!rows.length){flash("No parts detected");return;}
    let added=0,updated=0;
    setLibrary(existing=>{
      const next=[...existing];
      for(const row of rows){
        const key=row.partNumber.trim().toLowerCase();
        const gls=row.gls.trim().toLowerCase();
        const idx=next.findIndex(p=>(key && p.partNumber.trim().toLowerCase()===key) || (gls && p.gls.trim().toLowerCase()===gls));
        if(idx>=0){next[idx]={...next[idx],...row,id:next[idx].id,source:row.source||next[idx].source};updated++;}
        else{next.push(row);added++;}
      }
      return next;
    });
    setPaste(""); flash(`${rows.length} rows compiled · ${added} added · ${updated} updated`);
  };
  const addToPackage=(part:Part)=>setSelected(x=>x.some(p=>p.id===part.id)?x:[...x,part]);
  const addSuggestions=()=>{setSelected(x=>{const seen=new Set(x.map(p=>p.id));return [...x,...suggestions.map(s=>s.part).filter(p=>!seen.has(p.id))]});flash(`${suggestions.length} suggested parts added`);};
  const savePackage=()=>{
    if(!packageName.trim() || !selected.length){flash("Add package name and parts");return;}
    setSaved(x=>[{id:crypto.randomUUID(),name:packageName.trim(),symptom:symptom.trim(),parts:selected,createdAt:new Date().toISOString()},...x]); flash("Repair package saved");
  };
  const copyTable=async()=>{
    const lines=["PART NAME\tPART #\tGLS\tCOMPATIBLE WITH\tCOST\tLIST PRICE",...selected.map(p=>`${p.name}\t${p.partNumber}\t${p.gls}\t${p.compatibleWith}\t${money(effectiveCost(p))}\t${money(p.listPrice)}`),`\t\t\tRUNNING TOTAL\t${money(totalCost)}\t${money(totalList)}`];
    await navigator.clipboard.writeText(lines.join("\n")); flash("Compiled pricing table copied");
  };

  return <main style={{minHeight:"100vh",background:"#080b12",color:"#f4f4f7",fontFamily:"Arial,sans-serif",padding:24}}>
    <div style={{maxWidth:1500,margin:"0 auto",display:"grid",gap:16}}>
      <header style={{display:"flex",justifyContent:"space-between",gap:16,alignItems:"end",flexWrap:"wrap"}}>
        <div><div style={{fontSize:11,letterSpacing:".14em",color:"#7d8596",fontWeight:800}}>FIELD RESOURCE HUB</div><h1 style={{margin:"6px 0",fontSize:30}}>Repair Packages & Rebuild Kits</h1><p style={{margin:0,color:"#8c94a5"}}>Bulk import parts, GLS references and pricing. Package Assistant uses only imported data when compiling package cost.</p></div>
        <a href="/" style={{color:"#a99eff",textDecoration:"none",fontWeight:700}}>← Master Hub</a>
      </header>

      {notice&&<div style={{position:"fixed",right:24,bottom:24,zIndex:20,background:"#171d29",border:"1px solid #343d50",borderRadius:9,padding:"10px 14px"}}>{notice}</div>}

      <section style={{display:"grid",gridTemplateColumns:"minmax(320px,.75fr) minmax(0,1.6fr)",gap:16}}>
        <div style={panel}>
          <h2 style={h2}>Bulk Parts + GLS Import</h2>
          <p style={muted}>Paste CSV or tab-separated exports. Auto-detects Part Name, Part #, Compatible With, GLS, Cost, GLS Cost, List Price and Source/Vendor. Existing rows update by Part # or GLS.</p>
          <textarea value={paste} onChange={e=>setPaste(e.target.value)} placeholder={'PART NAME\tPART #\tGLS\tCOMPATIBLE WITH\tCOST\tGLS COST\tLIST PRICE\nDoor Motor\t123456\tGLS-001\tVAT 21\t245.00\t238.50\t390.00'} style={{...input,minHeight:210,resize:"vertical"}} />
          <button onClick={importText} style={primary}>Compile & Import Pricing</button>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,marginTop:12}}>
            <Metric label="PARTS" value={library.length}/><Metric label="WITH GLS" value={glsCount}/><Metric label="PRICED" value={pricedCount}/>
          </div>
        </div>

        <div style={panel}>
          <div style={{display:"flex",justifyContent:"space-between",gap:12,alignItems:"center",marginBottom:12}}><h2 style={h2}>Parts Library</h2><strong>{library.length} parts</strong></div>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search part, part #, GLS, model or source" style={{...input,marginBottom:10}}/>
          <div style={{overflow:"auto",maxHeight:460,border:"1px solid #252c39",borderRadius:10}}><table style={table}><thead><tr>{["PART NAME","PART #","GLS","COMPATIBLE WITH","COST","LIST",""].map(x=><th key={x} style={th}>{x}</th>)}</tr></thead><tbody>{filtered.map(p=><tr key={p.id}><td style={td}>{p.name}</td><td style={td}>{p.partNumber}</td><td style={td}>{p.gls||"—"}</td><td style={td}>{p.compatibleWith}</td><td style={{...td,textAlign:"right"}}>{effectiveCost(p)>0?money(effectiveCost(p)):"—"}</td><td style={{...td,textAlign:"right"}}>{p.listPrice>0?money(p.listPrice):"—"}</td><td style={td}><button onClick={()=>addToPackage(p)} style={mini}>Add</button></td></tr>)}{!filtered.length&&<tr><td colSpan={7} style={{...td,textAlign:"center",color:"#7d8596",padding:30}}>No matching parts</td></tr>}</tbody></table></div>
        </div>
      </section>

      <section style={panel}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr auto",gap:10,alignItems:"end",marginBottom:12}}>
          <label style={label}>PACKAGE NAME<input value={packageName} onChange={e=>setPackageName(e.target.value)} placeholder="VAT21-DOOR-FULL" style={input}/></label>
          <label style={label}>FAILURE / SYMPTOM<input value={symptom} onChange={e=>setSymptom(e.target.value)} placeholder="VAT 21 door does not work" style={input}/></label>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}><button onClick={()=>setAssistOpen(x=>!x)} style={secondary}>AI Assist</button><button onClick={copyTable} style={secondary}>Copy Pricing</button><button onClick={savePackage} style={primary}>Save Package</button></div>
        </div>

        {assistOpen&&<div style={{...panel,marginBottom:12,background:"#0d1320"}}>
          <div style={{display:"flex",justifyContent:"space-between",gap:12,alignItems:"center",flexWrap:"wrap"}}><div><h3 style={{margin:"0 0 4px",fontSize:14}}>Package Assistant</h3><p style={{...muted,margin:0}}>Has full access to the imported parts library, GLS identifiers, imported cost fields and list pricing. It never fabricates a part number, GLS value or price.</p></div>{suggestions.length>0&&<button onClick={addSuggestions} style={primary}>Add all {suggestions.length} suggestions</button>}</div>
          <div style={{display:"grid",gridTemplateColumns:"minmax(220px,.65fr) minmax(0,1.35fr)",gap:12,marginTop:12}}>
            <div><strong style={{fontSize:11}}>COVERAGE CHECK</strong><div style={{display:"grid",gap:6,marginTop:8}}>{expectedFamilies.length===0?<span style={muted}>Enter a model and symptom to run the coverage check.</span>:expectedFamilies.map(f=><div key={f} style={{fontSize:12,color:selectedFamilies.has(f)?"#67d6ba":"#e6b767"}}>{selectedFamilies.has(f)?"✓":"○"} {f}</div>)}</div>{missingFamilies.length>0&&<p style={{...muted,marginTop:10}}>Still missing: {missingFamilies.join(", ")}</p>}<div style={{marginTop:14,paddingTop:12,borderTop:"1px solid #252c39"}}><div style={priceLine}><span>Selected cost</span><strong>{money(totalCost)}</strong></div><div style={priceLine}><span>Selected list</span><strong>{money(totalList)}</strong></div></div></div>
            <div><strong style={{fontSize:11}}>SUGGESTED FROM IMPORTED DATA</strong><div style={{display:"grid",gap:7,marginTop:8,maxHeight:300,overflow:"auto"}}>{suggestions.map(s=><button key={s.part.id} onClick={()=>addToPackage(s.part)} style={{...secondary,height:"auto",padding:10,textAlign:"left",display:"grid",gridTemplateColumns:"1fr auto",gap:10}}><span><strong>{s.part.name}</strong><small style={{display:"block",color:"#8c94a5",marginTop:3}}>{s.part.partNumber||"No part #"}{s.part.gls?` · GLS ${s.part.gls}`:""} · {s.reasons.join(" · ")}</small></span><span style={{textAlign:"right"}}><strong>{effectiveCost(s.part)>0?money(effectiveCost(s.part)):"No cost"}</strong>{s.part.listPrice>0&&<small style={{display:"block",color:"#8c94a5"}}>List {money(s.part.listPrice)}</small>}</span></button>)}{!suggestions.length&&<span style={muted}>No library matches yet. Import parts/pricing or add more package context.</span>}</div></div>
          </div>
        </div>}

        <div style={{overflow:"auto",border:"1px solid #252c39",borderRadius:10}}><table style={table}><thead><tr>{["PART NAME","PART #","GLS","COMPATIBLE WITH","COST","LIST PRICE",""].map(x=><th key={x} style={th}>{x}</th>)}</tr></thead><tbody>{selected.map(p=><tr key={p.id}><td style={td}>{p.name}</td><td style={td}>{p.partNumber}</td><td style={td}>{p.gls||"—"}</td><td style={td}>{p.compatibleWith}</td><td style={{...td,textAlign:"right"}}>{money(effectiveCost(p))}</td><td style={{...td,textAlign:"right"}}>{p.listPrice>0?money(p.listPrice):"—"}</td><td style={td}><button onClick={()=>setSelected(x=>x.filter(q=>q.id!==p.id))} style={mini}>Remove</button></td></tr>)}{!selected.length&&<tr><td colSpan={7} style={{...td,textAlign:"center",color:"#7d8596",padding:28}}>No parts in this package</td></tr>}</tbody><tfoot><tr><td colSpan={4} style={{...td,textAlign:"right",fontWeight:800}}>RUNNING TOTAL</td><td style={{...td,textAlign:"right",fontWeight:800}}>{money(totalCost)}</td><td style={{...td,textAlign:"right",fontWeight:800}}>{money(totalList)}</td><td style={td}/></tr></tfoot></table></div>
      </section>

      {saved.length>0&&<section style={panel}><h2 style={h2}>Saved Repair Packages</h2><div style={{display:"grid",gap:8}}>{saved.map(pkg=><button key={pkg.id} onClick={()=>{setPackageName(pkg.name);setSymptom(pkg.symptom);setSelected(pkg.parts.map(normalizePart));}} style={{...secondary,height:"auto",padding:12,textAlign:"left"}}><strong>{pkg.name}</strong><small style={{display:"block",color:"#8c94a5",marginTop:3}}>{pkg.parts.length} parts · {money(pkg.parts.map(normalizePart).reduce((s,p)=>s+effectiveCost(p),0))}</small></button>)}</div></section>}
    </div>
  </main>;
}

function Metric({label,value}:{label:string;value:number}){return <div style={{border:"1px solid #252c39",borderRadius:8,padding:10}}><div style={{fontSize:10,color:"#7d8596",fontWeight:800}}>{label}</div><div style={{fontSize:18,fontWeight:800,marginTop:3}}>{value}</div></div>}
const panel:React.CSSProperties={border:"1px solid #252c39",borderRadius:12,background:"#10151f",padding:16};
const h2:React.CSSProperties={fontSize:16,margin:"0 0 10px"};
const muted:React.CSSProperties={fontSize:12,color:"#8c94a5",lineHeight:1.5};
const input:React.CSSProperties={width:"100%",boxSizing:"border-box",background:"#090d14",color:"#f4f4f7",border:"1px solid #30394b",borderRadius:8,padding:"10px 11px",fontSize:13};
const primary:React.CSSProperties={background:"#7667f5",color:"white",border:0,borderRadius:8,padding:"10px 13px",fontWeight:800,cursor:"pointer"};
const secondary:React.CSSProperties={background:"#151b26",color:"#eef0f5",border:"1px solid #30394b",borderRadius:8,padding:"9px 11px",fontWeight:700,cursor:"pointer"};
const mini:React.CSSProperties={...secondary,padding:"6px 8px",fontSize:11};
const table:React.CSSProperties={width:"100%",borderCollapse:"collapse",fontSize:12};
const th:React.CSSProperties={textAlign:"left",padding:"9px 10px",color:"#7d8596",fontSize:10,letterSpacing:".05em",borderBottom:"1px solid #252c39",whiteSpace:"nowrap"};
const td:React.CSSProperties={padding:"9px 10px",borderBottom:"1px solid #202734",verticalAlign:"top"};
const label:React.CSSProperties={display:"grid",gap:6,fontSize:10,color:"#8c94a5",fontWeight:800,letterSpacing:".05em"};
const priceLine:React.CSSProperties={display:"flex",justifyContent:"space-between",gap:12,fontSize:12,marginTop:6};
