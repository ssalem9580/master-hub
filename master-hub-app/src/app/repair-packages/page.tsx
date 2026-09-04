"use client";

import { useEffect, useMemo, useState } from "react";

type Part={id:string;name:string;partNumber:string;compatibleWith:string;gls:string;cost:number;glsCost:number;listPrice:number;source:string};
type SavedPackage={id:string;name:string;model:string;jobType:string;symptom:string;parts:Part[];createdAt:string};
type Scope="Required"|"Recommended while open"|"Inspect / replace if worn";
type RecipePart={name:string;partNumber:string;scope:Scope;note?:string};

const PARTS_KEY="master-hub:parts-library:v2";
const LEGACY_PARTS_KEY="master-hub:parts-library:v1";
const PACKAGES_KEY="master-hub:repair-packages:v2";
const LEGACY_PACKAGES_KEY="master-hub:repair-packages:v1";
const money=(v:number)=>v.toLocaleString("en-US",{style:"currency",currency:"USD"});
const clean=(v:string)=>v.trim().replace(/^['\"]|['\"]$/g,"");
const num=(v:string)=>Number(String(v||"").replace(/[$,()]/g,m=>m==="("?"-":m===")"?"":""))||0;
const norm=(v:string)=>String(v||"").trim().toLowerCase().replace(/[^a-z0-9]+/g," ").replace(/\s+/g," ").trim();
const effectiveCost=(p:Part)=>p.glsCost>0?p.glsCost:p.cost;

const beamGreenBoxRecipe:RecipePart[]=[
  {name:"BEAM Inside Base Audio Board Kit (for the drawer)",partNumber:"01750364595",scope:"Required"},
  {name:"BEAM Outside Base Audio Board Kit (for lane 2)",partNumber:"01750371472",scope:"Required"},
  {name:"Universal BEAM PBX Interface Box Green label",partNumber:"11066671000A",scope:"Required"},
  {name:"BEAM, SPKR, KIT, 50 MM",partNumber:"01750364575",scope:"Required",note:"Use new square speaker kit when this runs out"},
  {name:"SQUARE SPEAKER REPLACEMENT KIT 02909996",partNumber:"01750377544",scope:"Recommended while open"},
  {name:"RAINSHIELD MIC KIT (INCL MIC) BEAM and Pre-BEAM",partNumber:"11044587000A",scope:"Required"},
  {name:"Call Button Kit BEAM and Pre-BEAM",partNumber:"11041175000A",scope:"Required"},
  {name:"Call button cable between Inside Base Audio board and call button",partNumber:"11066468000A",scope:"Required"},
  {name:"Mic Cable between Inside Base Audio board and call button",partNumber:"11066423000A",scope:"Required"},
  {name:"Speaker Cable between Inside Base Audio board and call button",partNumber:"11066466000A",scope:"Required"},
  {name:"Pre-BEAM Base Inside Audio Board",partNumber:"11066401000A",scope:"Inspect / replace if worn"},
  {name:"Pre-BEAM Base Outside Audio Board",partNumber:"11066424000A",scope:"Inspect / replace if worn"},
  {name:"Pre-BEAM Speaker",partNumber:"11041776000A",scope:"Inspect / replace if worn"}
];

function parseDelimited(line:string,delimiter:string){if(delimiter==="\t")return line.split("\t").map(clean);const out:string[]=[];let cur="",quoted=false;for(let i=0;i<line.length;i++){const ch=line[i];if(ch==='"'&&line[i+1]==='"'){cur+='"';i++;continue}if(ch==='"'){quoted=!quoted;continue}if(ch===delimiter&&!quoted){out.push(clean(cur));cur="";continue}cur+=ch}out.push(clean(cur));return out}
function parseRows(text:string):Part[]{const lines=text.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);if(!lines.length)return[];const delimiter=lines.some(l=>l.includes("\t"))?"\t":",";const cells=lines.map(l=>parseDelimited(l,delimiter));const header=cells[0].map(x=>x.toLowerCase().replace(/[_-]+/g," ").trim());const find=(...names:string[])=>header.findIndex(h=>names.some(n=>h===n||h.includes(n)));const nameI=find("part name","description","item description","name"),numberI=find("part #","part#","part number","part no","partnum","pn","item number"),compatI=find("compatible with","compatible","model","equipment","applies to","machine"),glsI=find("gls","gls code","gls number","gls #"),costI=find("unit cost","part cost","dealer cost","standard cost","cost"),glsCostI=find("gls cost","gls price","gls unit cost"),listI=find("list price","sell price","retail price","price"),sourceI=find("source","vendor","supplier");const hasHeader=[nameI,numberI,compatI,glsI,costI,glsCostI,listI,sourceI].some(i=>i>=0);const data=hasHeader?cells.slice(1):cells;return data.map((r,i)=>({id:crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${i}`,name:r[nameI>=0?nameI:0]||"",partNumber:r[numberI>=0?numberI:1]||"",compatibleWith:r[compatI>=0?compatI:2]||"",gls:glsI>=0?(r[glsI]||""):"",cost:num(r[costI>=0?costI:3]||"0"),glsCost:glsCostI>=0?num(r[glsCostI]||"0"):0,listPrice:listI>=0?num(r[listI]||"0"):0,source:sourceI>=0?(r[sourceI]||""):"bulk import"})).filter(p=>p.name||p.partNumber||p.gls)}
function normalizePart(raw:any):Part{return{id:raw.id||crypto.randomUUID(),name:raw.name||"",partNumber:raw.partNumber||"",compatibleWith:raw.compatibleWith||"",gls:raw.gls||"",cost:Number(raw.cost)||0,glsCost:Number(raw.glsCost)||0,listPrice:Number(raw.listPrice)||0,source:raw.source||"legacy import"}}
function identity(p:Part){const pn=norm(p.partNumber);if(pn)return`pn:${pn}`;const gls=norm(p.gls);if(gls)return`gls:${gls}`;return`fallback:${norm(p.name)}|${norm(p.compatibleWith)}`}
function mergePart(a:Part,b:Part):Part{return{...a,name:b.name||a.name,partNumber:b.partNumber||a.partNumber,compatibleWith:b.compatibleWith||a.compatibleWith,gls:b.gls||a.gls,cost:b.cost||a.cost,glsCost:b.glsCost||a.glsCost,listPrice:b.listPrice||a.listPrice,source:b.source||a.source,id:a.id}}
function dedupeParts(parts:Part[]){const m=new Map<string,Part>();for(const raw of parts){const p=normalizePart(raw),k=identity(p),e=m.get(k);m.set(k,e?mergePart(e,p):p)}return[...m.values()]}
function dedupePackages(pkgs:any[]):SavedPackage[]{const m=new Map<string,SavedPackage>();for(const raw of pkgs){const pkg:SavedPackage={id:raw.id||crypto.randomUUID(),name:raw.name||"",model:raw.model||"",jobType:raw.jobType||raw.name||"",symptom:raw.symptom||"",parts:dedupeParts((raw.parts||[]).map(normalizePart)),createdAt:raw.createdAt||new Date().toISOString()};const k=`${norm(pkg.name)}|${norm(pkg.model)}|${norm(pkg.jobType)}`;m.set(k,pkg)}return[...m.values()]}
function isBeamGreenBox(model:string,jobType:string,symptom:string){const s=norm(`${model} ${jobType} ${symptom}`);return s.includes("beam")&&(s.includes("green box")||s.includes("audio update")||s.includes("pbx"))}

export default function RepairPackagesPage(){
  const[library,setLibrary]=useState<Part[]>([]),[selected,setSelected]=useState<Part[]>([]),[saved,setSaved]=useState<SavedPackage[]>([]);
  const[packageName,setPackageName]=useState(""),[model,setModel]=useState(""),[jobType,setJobType]=useState(""),[symptom,setSymptom]=useState(""),[search,setSearch]=useState(""),[paste,setPaste]=useState(""),[notice,setNotice]=useState(""),[assistOpen,setAssistOpen]=useState(false);
  useEffect(()=>{try{const current=JSON.parse(localStorage.getItem(PARTS_KEY)||"[]"),legacy=JSON.parse(localStorage.getItem(LEGACY_PARTS_KEY)||"[]");setLibrary(dedupeParts((current.length?current:legacy).map(normalizePart)))}catch{}try{const current=JSON.parse(localStorage.getItem(PACKAGES_KEY)||"[]"),legacy=JSON.parse(localStorage.getItem(LEGACY_PACKAGES_KEY)||"[]");setSaved(dedupePackages(current.length?current:legacy))}catch{}},[]);
  useEffect(()=>{localStorage.setItem(PARTS_KEY,JSON.stringify(dedupeParts(library)))},[library]);
  useEffect(()=>{localStorage.setItem(PACKAGES_KEY,JSON.stringify(dedupePackages(saved)))},[saved]);
  useEffect(()=>{if(assistOpen)setSelected(x=>dedupeParts(x))},[assistOpen]);

  const totalCost=useMemo(()=>dedupeParts(selected).reduce((s,p)=>s+effectiveCost(p),0),[selected]);
  const totalList=useMemo(()=>dedupeParts(selected).reduce((s,p)=>s+p.listPrice,0),[selected]);
  const filtered=useMemo(()=>{const q=norm(search);if(!q)return library;return library.filter(p=>norm(`${p.name} ${p.partNumber} ${p.gls} ${p.compatibleWith} ${p.source}`).includes(q))},[library,search]);
  const duplicateCount=selected.length-dedupeParts(selected).length;
  const knownRecipe=isBeamGreenBox(model,jobType,symptom)?beamGreenBoxRecipe:[];
  const recipeRows=useMemo(()=>knownRecipe.map(r=>{const match=library.find(p=>norm(p.partNumber)===norm(r.partNumber));return{recipe:r,part:match||null}}),[knownRecipe,library]);
  const missingRecipe=recipeRows.filter(x=>!x.part);
  const suggested=recipeRows.filter(x=>x.part).map(x=>({part:x.part!,scope:x.recipe.scope,note:x.recipe.note||""}));

  const flash=(m:string)=>{setNotice(m);setTimeout(()=>setNotice(""),2200)};
  const importText=()=>{const rows=parseRows(paste);if(!rows.length){flash("No parts detected");return}setLibrary(existing=>dedupeParts([...existing,...rows]));setPaste("");flash(`${rows.length} rows compiled · duplicates merged automatically`)};
  const addToPackage=(part:Part)=>setSelected(x=>dedupeParts([...x,part]));
  const addKnownRecipe=()=>{setSelected(x=>dedupeParts([...x,...suggested.map(s=>s.part)]));flash(`${suggested.length} matching recipe parts added · duplicates removed`)};
  const cleanDuplicates=()=>{const before=selected.length;const next=dedupeParts(selected);setSelected(next);flash(`${before-next.length} duplicate${before-next.length===1?"":"s"} removed`)};
  const savePackage=()=>{const parts=dedupeParts(selected);if(!packageName.trim()||!parts.length){flash("Add package name and parts");return}const pkg:SavedPackage={id:crypto.randomUUID(),name:packageName.trim(),model:model.trim(),jobType:jobType.trim(),symptom:symptom.trim(),parts,createdAt:new Date().toISOString()};setSaved(x=>dedupePackages([pkg,...x]));setSelected(parts);flash("Repair package saved without duplicates")};
  const copyTable=async()=>{const parts=dedupeParts(selected);const lines=["PART NAME\tPART #\tGLS\tCOMPATIBLE WITH\tCOST\tLIST PRICE",...parts.map(p=>`${p.name}\t${p.partNumber}\t${p.gls}\t${p.compatibleWith}\t${money(effectiveCost(p))}\t${money(p.listPrice)}`),`\t\t\tRUNNING TOTAL\t${money(totalCost)}\t${money(totalList)}`];await navigator.clipboard.writeText(lines.join("\n"));flash("Duplicate-free pricing table copied")};

  return <main style={{minHeight:"100vh",background:"#080b12",color:"#f4f4f7",fontFamily:"Arial,sans-serif",padding:24}}><div style={{maxWidth:1500,margin:"0 auto",display:"grid",gap:16}}>
    <header><div style={{fontSize:11,letterSpacing:".14em",color:"#7d8596",fontWeight:800}}>FIELD RESOURCE HUB</div><h1 style={{margin:"6px 0",fontSize:30}}>Repair Packages & Rebuild Kits</h1><p style={{margin:0,color:"#8c94a5"}}>Bulk import parts, GLS references and pricing. AI Assist compiles model/job-specific scope from known packages and your imported library, removes duplicates, and flags missing parts instead of inventing them.</p></header>
    {notice&&<div style={{position:"fixed",right:24,bottom:24,zIndex:20,background:"#171d29",border:"1px solid #343d50",borderRadius:9,padding:"10px 14px"}}>{notice}</div>}

    <section style={{display:"grid",gridTemplateColumns:"minmax(320px,.75fr) minmax(0,1.6fr)",gap:16}}>
      <div style={panel}><h2 style={h2}>Bulk Parts + GLS Import</h2><p style={muted}>Paste CSV or tab-separated exports. Auto-detects Part Name, Part #, Compatible With, GLS, Cost, GLS Cost, List Price and Source/Vendor. Duplicate Part # / GLS rows are merged automatically.</p><textarea value={paste} onChange={e=>setPaste(e.target.value)} style={{...input,minHeight:200,resize:"vertical"}}/><button onClick={importText} style={primary}>Compile & Import Pricing</button></div>
      <div style={panel}><div style={{display:"flex",justifyContent:"space-between",gap:12,alignItems:"center",marginBottom:10}}><h2 style={h2}>Parts Library</h2><strong>{library.length} unique parts</strong></div><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search part, PN, GLS, model or source" style={{...input,marginBottom:10}}/><div style={{overflow:"auto",maxHeight:430,border:"1px solid #252c39",borderRadius:10}}><table style={table}><thead><tr>{["PART NAME","PART #","GLS","COMPATIBLE WITH","COST","LIST",""].map(x=><th key={x} style={th}>{x}</th>)}</tr></thead><tbody>{filtered.map(p=><tr key={p.id}><td style={td}>{p.name}</td><td style={td}>{p.partNumber}</td><td style={td}>{p.gls||"—"}</td><td style={td}>{p.compatibleWith}</td><td style={{...td,textAlign:"right"}}>{effectiveCost(p)>0?money(effectiveCost(p)):"—"}</td><td style={{...td,textAlign:"right"}}>{p.listPrice>0?money(p.listPrice):"—"}</td><td style={td}><button onClick={()=>addToPackage(p)} style={mini}>Add</button></td></tr>)}</tbody></table></div></div>
    </section>

    <section style={panel}><div style={{display:"grid",gridTemplateColumns:"repeat(4,minmax(0,1fr))",gap:10,marginBottom:10}}><label style={label}>PACKAGE NAME<input value={packageName} onChange={e=>setPackageName(e.target.value)} style={input}/></label><label style={label}>MODEL / EQUIPMENT<input value={model} onChange={e=>setModel(e.target.value)} placeholder="BEAM / VAT 21 / 122-50" style={input}/></label><label style={label}>JOB TYPE<input value={jobType} onChange={e=>setJobType(e.target.value)} placeholder="BEAM Audio Green Box Update" style={input}/></label><label style={label}>FAILURE / SYMPTOM<input value={symptom} onChange={e=>setSymptom(e.target.value)} style={input}/></label></div><div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12}}><button onClick={()=>setAssistOpen(x=>!x)} style={secondary}>AI Assist</button><button onClick={cleanDuplicates} style={secondary}>Remove Duplicates{duplicateCount>0?` (${duplicateCount})`:""}</button><button onClick={copyTable} style={secondary}>Copy Pricing</button><button onClick={savePackage} style={primary}>Save Package</button></div>

    {assistOpen&&<div style={{...panel,background:"#0d1320",marginBottom:12}}><div style={{display:"flex",justifyContent:"space-between",gap:12,alignItems:"center",flexWrap:"wrap"}}><div><h3 style={{margin:"0 0 4px",fontSize:14}}>AI Assist · Complete Scoped Package</h3><p style={{...muted,margin:0}}>Uses model/job-specific known recipes plus your imported pricing. It removes duplicates automatically and separates Required, Recommended while open, and Inspect / replace if worn so the package is complete without adding unsupported parts.</p></div>{suggested.length>0&&<button onClick={addKnownRecipe} style={primary}>Add all {suggested.length} matched parts</button>}</div>
      {knownRecipe.length>0?<div style={{marginTop:12,overflow:"auto",border:"1px solid #252c39",borderRadius:10}}><table style={table}><thead><tr>{["SCOPE","PART / COMPONENT","DN PN","STATUS","COST","NOTE"].map(x=><th key={x} style={th}>{x}</th>)}</tr></thead><tbody>{recipeRows.map(({recipe,part})=><tr key={recipe.partNumber}><td style={td}>{recipe.scope}</td><td style={td}>{recipe.name}</td><td style={td}>{recipe.partNumber}</td><td style={{...td,color:part?"#67d6ba":"#e6b767"}}>{part?"Matched in imported library":"Missing from imported library"}</td><td style={{...td,textAlign:"right"}}>{part&&effectiveCost(part)>0?money(effectiveCost(part)):"—"}</td><td style={td}>{recipe.note||""}</td></tr>)}</tbody></table></div>:<p style={{...muted,marginTop:12}}>Enter a recognized model/job package. Example: <strong>BEAM Audio Green Box Update</strong>. Unknown job types are not auto-filled until a verified recipe is added.</p>}
      {missingRecipe.length>0&&<p style={{...muted,color:"#e6b767",marginTop:10}}>{missingRecipe.length} recipe part{missingRecipe.length===1?"":"s"} are not yet in your imported library. Import them with pricing to make the package fully costed.</p>}
    </div>}

    <div style={{overflow:"auto",border:"1px solid #252c39",borderRadius:10}}><table style={table}><thead><tr>{["PART NAME","PART #","GLS","COMPATIBLE WITH","COST","LIST PRICE",""].map(x=><th key={x} style={th}>{x}</th>)}</tr></thead><tbody>{dedupeParts(selected).map(p=><tr key={identity(p)}><td style={td}>{p.name}</td><td style={td}>{p.partNumber}</td><td style={td}>{p.gls||"—"}</td><td style={td}>{p.compatibleWith}</td><td style={{...td,textAlign:"right"}}>{money(effectiveCost(p))}</td><td style={{...td,textAlign:"right"}}>{p.listPrice>0?money(p.listPrice):"—"}</td><td style={td}><button onClick={()=>setSelected(x=>x.filter(q=>identity(q)!==identity(p)))} style={mini}>Remove</button></td></tr>)}{dedupeParts(selected).length===0&&<tr><td colSpan={7} style={{...td,textAlign:"center",color:"#7d8596",padding:28}}>No parts in this package</td></tr>}</tbody><tfoot><tr><td colSpan={4} style={{...td,textAlign:"right",fontWeight:800}}>RUNNING TOTAL</td><td style={{...td,textAlign:"right",fontWeight:800}}>{money(totalCost)}</td><td style={{...td,textAlign:"right",fontWeight:800}}>{money(totalList)}</td><td style={td}/></tr></tfoot></table></div></section>

    {saved.length>0&&<section style={panel}><h2 style={h2}>Saved Repair Packages</h2><div style={{display:"grid",gap:8}}>{saved.map(pkg=><button key={pkg.id} onClick={()=>{setPackageName(pkg.name);setModel(pkg.model);setJobType(pkg.jobType);setSymptom(pkg.symptom);setSelected(dedupeParts(pkg.parts.map(normalizePart)))}} style={{...secondary,height:"auto",padding:12,textAlign:"left"}}><strong>{pkg.name}</strong><small style={{display:"block",color:"#8c94a5",marginTop:3}}>{pkg.model||"No model"} · {pkg.jobType||"No job type"} · {dedupeParts(pkg.parts).length} unique parts</small></button>)}</div></section>}
  </div></main>
}

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