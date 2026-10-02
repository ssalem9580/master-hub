"use client";

import { ChangeEvent, CSSProperties, useEffect, useMemo, useState } from "react";

type Part={id:string;name:string;partNumber:string;compatibleWith:string;gls:string;cost:number;glsCost:number;listPrice:number;source:string};
type SavedPackage={id:string;name:string;task:string;model:string;symptom:string;parts:Part[];createdAt:string};
type UnknownRecord=Record<string,unknown>;

const PARTS_KEY="master-hub:parts-library:v3";
const LEGACY_PARTS_KEYS=["master-hub:parts-library:v2","master-hub:parts-library:v1"];
const PACKAGES_KEY="master-hub:repair-packages:v3";
const LEGACY_PACKAGE_KEYS=["master-hub:repair-packages:v2","master-hub:repair-packages:v1"];
const DRAFT_KEY="master-hub:repair-package-draft:v2";
const PRELOAD_URLS=["/data/parts-master-1.tsv","/data/parts-master-2.tsv","/data/parts-master-3.tsv","/data/parts-master-4.tsv"];
const MAX_SEARCH_RESULTS=80;

const money=(v:number)=>v.toLocaleString("en-US",{style:"currency",currency:"USD"});
const clean=(v:string)=>v.trim().replace(/^['\"]|['\"]$/g,"");
const num=(v:string)=>Number(String(v||"").replace(/[$,()]/g,m=>m==="("?"-":m===")"?"":""))||0;
const norm=(v:string)=>String(v||"").trim().toLowerCase().replace(/[^a-z0-9]+/g," ").replace(/\s+/g," ").trim();
const asRecord=(value:unknown):UnknownRecord=>value!==null&&typeof value==="object"&&!Array.isArray(value)?value as UnknownRecord:{};
const textValue=(value:unknown)=>typeof value==="string"?value:"";
const numberValue=(value:unknown)=>Number(value)||0;
const effectiveCost=(p:Part)=>p.glsCost>0?p.glsCost:p.cost;
const uid=()=>typeof crypto!=="undefined"&&crypto.randomUUID?crypto.randomUUID():`${Date.now()}-${Math.random().toString(36).slice(2)}`;
const isBundledMaster=(p:Part)=>/^Master parts source /i.test(p.source||"");
const readStoredArray=(key:string):unknown[]=>{try{const value=JSON.parse(localStorage.getItem(key)||"[]");return Array.isArray(value)?value:[]}catch{return[]}};
const readFirstStoredArray=(keys:string[])=>{for(const key of keys){const rows=readStoredArray(key);if(rows.length)return rows}return[] as unknown[]};

function parseDelimited(line:string,delimiter:string){
  if(delimiter==="\t")return line.split("\t").map(clean);
  const out:string[]=[];let cur="",quoted=false;
  for(let i=0;i<line.length;i++){
    const ch=line[i];
    if(ch==='"'&&line[i+1]==='"'){cur+='"';i++;continue}
    if(ch==='"'){quoted=!quoted;continue}
    if(ch===delimiter&&!quoted){out.push(clean(cur));cur="";continue}
    cur+=ch;
  }
  out.push(clean(cur));return out;
}
function markdownToTsv(text:string){const lines=text.split(/\r?\n/).filter(l=>l.trim().startsWith("|"));if(lines.length<2)return text;return lines.filter(l=>!/^\s*\|?\s*:?-{3,}/.test(l)).map(l=>l.trim().replace(/^\||\|$/g,"").split("|").map(x=>x.trim()).join("\t")).join("\n")}
function jsonToTsv(text:string){try{const raw:unknown=JSON.parse(text),root=asRecord(raw);const rows:unknown[]=Array.isArray(raw)?raw:Array.isArray(root.parts)?root.parts:[];const records=rows.map(asRecord).filter(r=>Object.keys(r).length>0);if(!records.length)return text;const keys:string[]=Array.from(new Set(records.flatMap(r=>Object.keys(r))));return[keys.join("\t"),...records.map(r=>keys.map(k=>String(r[k]??"")).join("\t"))].join("\n")}catch{return text}}
function normalizeDocumentText(text:string,fileName=""){const lower=fileName.toLowerCase();if(lower.endsWith(".md")||text.trim().startsWith("|"))return markdownToTsv(text);if(lower.endsWith(".json")||text.trim().startsWith("[")||text.trim().startsWith("{"))return jsonToTsv(text);return text}

function parseRows(text:string,source="bulk import"):Part[]{
  const lines=text.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);if(!lines.length)return[];
  const sample=lines[0]||"";
  const delimiter=sample.includes("\t")?"\t":sample.includes("|")?"|":",";
  const cells=lines.map(l=>parseDelimited(l,delimiter));
  const header=cells[0].map(x=>x.toLowerCase().replace(/[_-]+/g," ").trim());
  const find=(...names:string[])=>header.findIndex(h=>names.some(n=>h===n||h.includes(n)));
  const nameI=find("part name","description","item description","name");
  const numberI=find("part #","part#","part number","part no","partnum","pn","item number","product code");
  const compatI=find("compatible with","compatible","model","equipment","applies to","machine");
  const glsI=find("gls","gls code","gls number","gls #");
  const costI=find("standard cost","unit cost","part cost","dealer cost","customer cost","cost");
  const glsCostI=find("gls cost","gls price","gls unit cost");
  const listI=find("list price","sell price","retail price","price");
  const sourceI=find("source","vendor","supplier","organization");
  const hasHeader=[nameI,numberI,compatI,glsI,costI,glsCostI,listI,sourceI].some(i=>i>=0);
  const data=hasHeader?cells.slice(1):cells;
  return data.map((r,i)=>({
    id:uid(),
    name:r[nameI>=0?nameI:(hasHeader?0:1)]||"",
    partNumber:r[numberI>=0?numberI:0]||"",
    compatibleWith:r[compatI>=0?compatI:2]||"",
    gls:glsI>=0?(r[glsI]||""):"",
    cost:costI>=0?num(r[costI]||"0"):(!hasHeader&&r.length>=3?num(r[2]||"0"):0),
    glsCost:glsCostI>=0?num(r[glsCostI]||"0"):0,
    listPrice:listI>=0?num(r[listI]||"0"):0,
    source:sourceI>=0?(r[sourceI]||source):source
  })).filter(p=>p.name||p.partNumber||p.gls);
}

function normalizePart(raw:unknown):Part{
  const r=asRecord(raw);
  return{id:textValue(r.id)||uid(),name:textValue(r.name),partNumber:textValue(r.partNumber),compatibleWith:textValue(r.compatibleWith),gls:textValue(r.gls),cost:numberValue(r.cost),glsCost:numberValue(r.glsCost),listPrice:numberValue(r.listPrice),source:textValue(r.source)||"legacy import"};
}
function identity(p:Part){const pn=norm(p.partNumber),gls=norm(p.gls);if(pn)return`pn:${pn}`;if(gls)return`gls:${gls}`;return`fallback:${norm(p.name)}|${norm(p.compatibleWith)}`}
function mergePart(a:Part,b:Part):Part{return{...a,name:b.name||a.name,partNumber:b.partNumber||a.partNumber,compatibleWith:b.compatibleWith||a.compatibleWith,gls:b.gls||a.gls,cost:b.cost||a.cost,glsCost:b.glsCost||a.glsCost,listPrice:b.listPrice||a.listPrice,source:b.source||a.source,id:a.id}}
function dedupeParts(parts:Part[]){const m=new Map<string,Part>();for(const raw of parts){const p=normalizePart(raw),k=identity(p),e=m.get(k);m.set(k,e?mergePart(e,p):p)}return[...m.values()]}
function dedupePackages(pkgs:unknown[]):SavedPackage[]{const m=new Map<string,SavedPackage>();for(const raw of pkgs){const r=asRecord(raw),parts=Array.isArray(r.parts)?r.parts:[];const name=textValue(r.name);const pkg:SavedPackage={id:textValue(r.id)||uid(),name,task:textValue(r.task)||textValue(r.jobType)||name,model:textValue(r.model),symptom:textValue(r.symptom),parts:dedupeParts(parts.map(normalizePart)),createdAt:textValue(r.createdAt)||new Date().toISOString()};const k=`${norm(pkg.task)}|${norm(pkg.name)}|${norm(pkg.model)}`;m.set(k,pkg)}return[...m.values()]}

export default function RepairPackagesPage(){
  const[masterParts,setMasterParts]=useState<Part[]>([]),[localParts,setLocalParts]=useState<Part[]>([]),[selected,setSelected]=useState<Part[]>([]),[saved,setSaved]=useState<SavedPackage[]>([]),[hydrated,setHydrated]=useState(false);
  const[packageName,setPackageName]=useState(""),[task,setTask]=useState(""),[model,setModel]=useState(""),[symptom,setSymptom]=useState(""),[search,setSearch]=useState(""),[paste,setPaste]=useState(""),[notice,setNotice]=useState(""),[importing,setImporting]=useState(false),[partNumberEntry,setPartNumberEntry]=useState(""),[sourceCount,setSourceCount]=useState(0),[sourceError,setSourceError]=useState("");

  useEffect(()=>{let cancelled=false;const id=window.setTimeout(async()=>{
    const currentParts=readStoredArray(PARTS_KEY),legacyParts=readFirstStoredArray(LEGACY_PARTS_KEYS),currentPackages=readStoredArray(PACKAGES_KEY),legacyPackages=readFirstStoredArray(LEGACY_PACKAGE_KEYS);
    const stored=dedupeParts((currentParts.length?currentParts:legacyParts).map(normalizePart)).filter(p=>!isBundledMaster(p));
    if(cancelled)return;
    setLocalParts(stored);
    setSaved(dedupePackages(currentPackages.length?currentPackages:legacyPackages));
    try{const raw=localStorage.getItem(DRAFT_KEY);if(raw){const d=asRecord(JSON.parse(raw));setPackageName(textValue(d.packageName));setTask(textValue(d.task));setModel(textValue(d.model));setSymptom(textValue(d.symptom));setSearch(textValue(d.search));setPaste(textValue(d.paste));if(Array.isArray(d.selected))setSelected(dedupeParts(d.selected.map(normalizePart)))}}catch{}

    try{
      const rows:Part[]=[];
      for(let i=0;i<PRELOAD_URLS.length;i++){
        const res=await fetch(PRELOAD_URLS[i],{cache:"force-cache"});
        if(!res.ok)throw new Error(`Failed ${PRELOAD_URLS[i]}`);
        rows.push(...parseRows(await res.text(),`Master parts source ${i+1}`));
        if(cancelled)return;
      }
      const preloaded=dedupeParts(rows);
      setMasterParts(preloaded);
      setSourceCount(preloaded.length);
      setSourceError("");
    }catch{
      if(!cancelled)setSourceError("Master parts source could not be loaded. Saved local parts are still available.");
    }
    if(!cancelled)setHydrated(true);
  },0);return()=>{cancelled=true;window.clearTimeout(id)}},[]);

  useEffect(()=>{if(!hydrated)return;try{localStorage.setItem(PARTS_KEY,JSON.stringify(dedupeParts(localParts)))}catch{}},[hydrated,localParts]);
  useEffect(()=>{if(!hydrated)return;try{localStorage.setItem(PACKAGES_KEY,JSON.stringify(dedupePackages(saved)))}catch{}},[hydrated,saved]);
  useEffect(()=>{if(!hydrated)return;try{localStorage.setItem(DRAFT_KEY,JSON.stringify({packageName,task,model,symptom,search,paste,selected:dedupeParts(selected)}))}catch{}},[hydrated,packageName,task,model,symptom,search,paste,selected]);

  const library=useMemo(()=>dedupeParts([...masterParts,...localParts]),[masterParts,localParts]);
  const partIndex=useMemo(()=>{const map=new Map<string,Part>();for(const part of library){const key=norm(part.partNumber);if(key)map.set(key,part)}return map},[library]);
  const filtered=useMemo(()=>{const q=norm(search);if(q.length<2)return[];const out:Part[]=[];for(const p of library){if(norm(`${p.name} ${p.partNumber} ${p.compatibleWith}`).includes(q)){out.push(p);if(out.length>=MAX_SEARCH_RESULTS)break}}return out},[library,search]);
  const packageParts=useMemo(()=>dedupeParts(selected),[selected]);
  const totalCost=useMemo(()=>packageParts.reduce((s,p)=>s+effectiveCost(p),0),[packageParts]);
  const lookupPart=useMemo(()=>{const q=norm(partNumberEntry);return q?partIndex.get(q)||null:null},[partIndex,partNumberEntry]);

  const flash=(m:string)=>{setNotice(m);window.setTimeout(()=>setNotice(""),2600)};
  const mergeImported=(rows:Part[],label:string)=>{if(!rows.length){flash("No parts detected");return}setLocalParts(existing=>dedupeParts([...existing,...rows]));flash(`${rows.length} parts imported from ${label}`)};
  const importText=()=>{const rows=parseRows(normalizeDocumentText(paste),"pasted import");mergeImported(rows,"pasted data");if(rows.length)setPaste("")};
  const importFiles=async(e:ChangeEvent<HTMLInputElement>)=>{const files=Array.from(e.target.files||[]);if(!files.length)return;setImporting(true);let all:Part[]=[];const rejected:string[]=[];for(const file of files){if(!/\.(csv|tsv|txt|md|json|html?)$/i.test(file.name)){rejected.push(file.name);continue}try{all=[...all,...parseRows(normalizeDocumentText(await file.text(),file.name),file.name)]}catch{rejected.push(file.name)}}if(all.length)mergeImported(all,`${files.length-rejected.length} document${files.length-rejected.length===1?"":"s"}`);if(rejected.length)flash(`Skipped unsupported: ${rejected.join(", ")}`);setImporting(false);e.target.value=""};
  const addToPackage=(part:Part)=>setSelected(x=>dedupeParts([...x,part]));
  const removeFromPackage=(part:Part)=>setSelected(x=>x.filter(q=>identity(q)!==identity(part)));
  const addLookupPart=()=>{if(!lookupPart){flash("Part number not found in master source");return}addToPackage(lookupPart);setPartNumberEntry("");flash(`${lookupPart.partNumber} added to package`)};
  const savePackage=()=>{const parts=dedupeParts(selected);if(!task.trim()||!parts.length){flash("Enter repair task and add at least one part");return}const pkg:SavedPackage={id:uid(),name:packageName.trim()||task.trim(),task:task.trim(),model:model.trim(),symptom:symptom.trim(),parts,createdAt:new Date().toISOString()};setSaved(x=>dedupePackages([pkg,...x]));flash("Repair package saved")};
  const copyPackage=async()=>{const lines=[`TASK\t${task||"—"}`,"PART #\tPART NAME\tPART COST",...packageParts.map(p=>`${p.partNumber}\t${p.name}\t${money(effectiveCost(p))}`),`\tTOTAL\t${money(totalCost)}`];try{await navigator.clipboard.writeText(lines.join("\n"));flash("Package copied")}catch{flash("Copy failed — select and copy manually")}};
  const newPackage=()=>{setPackageName("");setTask("");setModel("");setSymptom("");setSelected([]);setPartNumberEntry("");flash("New package ready")};
  const loadPackage=(pkg:SavedPackage)=>{setPackageName(pkg.name);setTask(pkg.task);setModel(pkg.model);setSymptom(pkg.symptom);setSelected(dedupeParts(pkg.parts.map(normalizePart)));window.scrollTo({top:0,behavior:"smooth"})};

  return <main style={{minHeight:"100vh",background:"#080b12",color:"#f4f4f7",fontFamily:"Arial,sans-serif",padding:"clamp(14px,3vw,24px)"}}><div style={{maxWidth:1320,margin:"0 auto",display:"grid",gap:14}}>
    <header><div style={{fontSize:10,letterSpacing:".14em",color:"#7d8596",fontWeight:800}}>FIELD RESOURCE HUB</div><h1 style={{margin:"6px 0",fontSize:"clamp(24px,5vw,30px)"}}>Repair Package Builder</h1><p style={{margin:0,color:"#8c94a5",lineHeight:1.5}}>Enter a Part # and the master source fills Part Name and Part Cost. Build and save the complete parts kit for each repair.</p><p style={{margin:"6px 0 0",color:"#67d6ba",fontSize:12}}>Drafts, local imports and saved packages auto-save. The large master catalog stays read-only and is not copied into browser storage.</p></header>
    {notice&&<div style={{position:"fixed",right:18,bottom:18,zIndex:20,background:"#171d29",border:"1px solid #343d50",borderRadius:9,padding:"10px 14px",maxWidth:320}}>{notice}</div>}

    <section style={panel}>
      <div style={sectionHead}><div><h2 style={h2}>1. Define the repair</h2><p style={{...muted,margin:0}}>Repair task is required. Package name is optional.</p></div><div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}><span style={{fontSize:12,color:sourceError?"#e6b767":"#67d6ba"}}>{sourceError||`${sourceCount.toLocaleString()} master parts ready`}</span><button onClick={newPackage} style={secondary}>New package</button></div></div>
      <div style={formGrid}>
        <label style={label}>REPAIR TASK<input value={task} onChange={e=>setTask(e.target.value)} placeholder="Example: Replace VAT 21 motor" style={input}/></label>
        <label style={label}>PACKAGE NAME<input value={packageName} onChange={e=>setPackageName(e.target.value)} placeholder="Optional display name" style={input}/></label>
        <label style={label}>MODEL / EQUIPMENT<input value={model} onChange={e=>setModel(e.target.value)} placeholder="VAT 21 / BEAM / 122-50" style={input}/></label>
        <label style={label}>FAILURE / NOTES<input value={symptom} onChange={e=>setSymptom(e.target.value)} placeholder="Optional symptom or notes" style={input}/></label>
      </div>
    </section>

    <section style={panel}>
      <div style={sectionHead}><div><h2 style={h2}>2. Add part by Part #</h2><p style={{...muted,margin:0}}>Exact Part # lookup. Name and cost populate automatically.</p></div></div>
      <div style={lookupGrid}>
        <label style={label}>PART #<input value={partNumberEntry} onChange={e=>setPartNumberEntry(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"){e.preventDefault();addLookupPart()}}} placeholder="11066404000A" autoComplete="off" style={input}/></label>
        <label style={label}>PART NAME<input value={lookupPart?.name||""} readOnly placeholder="Auto-populates" style={{...input,color:lookupPart?"#f4f4f7":"#7d8596"}}/></label>
        <label style={label}>PART COST<input value={lookupPart&&effectiveCost(lookupPart)>0?money(effectiveCost(lookupPart)):""} readOnly placeholder="Auto-populates" style={{...input,color:lookupPart?"#f4f4f7":"#7d8596"}}/></label>
        <button onClick={addLookupPart} disabled={!lookupPart} style={{...primary,opacity:lookupPart?1:.45,cursor:lookupPart?"pointer":"not-allowed",minHeight:40}}>Add part</button>
      </div>
      {partNumberEntry&&!lookupPart&&<p style={{...muted,color:"#e6b767",margin:"9px 0 0"}}>No exact Part # match.</p>}
    </section>

    <section style={twoCol}>
      <div style={panel}><h2 style={h2}>3. Optional local updates</h2><p style={muted}>Paste or import corrections/additions without replacing the bundled master catalog. Pipe rows are supported: <strong>11066404000A|Spherical Block Tape|$102.74|</strong></p><label style={{...secondary,display:"inline-block",marginBottom:10,cursor:"pointer"}}>{importing?"Importing…":"Import documents"}<input type="file" multiple accept=".csv,.tsv,.txt,.md,.json,.html,.htm,text/csv,text/plain,application/json" onChange={importFiles} style={{display:"none"}} disabled={importing}/></label><textarea value={paste} onChange={e=>setPaste(e.target.value)} placeholder="Part # | Part Name | Part Cost" style={{...input,minHeight:130,resize:"vertical"}}/><button onClick={importText} style={{...primary,marginTop:10}}>Import parts</button><p style={{...muted,marginBottom:0}}>{localParts.length.toLocaleString()} locally saved part override{localParts.length===1?"":"s"}.</p></div>

      <div style={panel}><div style={sectionHead}><div><h2 style={h2}>4. Search master parts</h2><p style={{...muted,margin:0}}>Results are limited to {MAX_SEARCH_RESULTS} so the page stays fast.</p></div><strong>{filtered.length?`${filtered.length} shown`:""}</strong></div><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Type at least 2 characters" style={{...input,marginBottom:10}}/><div style={{overflow:"auto",maxHeight:390,border:"1px solid #252c39",borderRadius:10}}><table style={table}><thead><tr>{["PART #","PART NAME","PART COST",""].map((x,i)=><th key={`${x}-${i}`} style={th}>{x}</th>)}</tr></thead><tbody>{filtered.map(p=><tr key={identity(p)}><td style={td}><strong>{p.partNumber||"—"}</strong></td><td style={td}>{p.name}</td><td style={{...td,textAlign:"right"}}>{effectiveCost(p)>0?money(effectiveCost(p)):"—"}</td><td style={td}><button onClick={()=>addToPackage(p)} style={mini}>Add</button></td></tr>)}{filtered.length===0&&<tr><td colSpan={4} style={{...td,textAlign:"center",color:"#7d8596",padding:24}}>{norm(search).length<2?"Search by Part # or Part Name to browse the catalog.":"No matching parts."}</td></tr>}</tbody></table></div></div>
    </section>

    <section style={panel}>
      <div style={sectionHead}><div><h2 style={h2}>5. Package for the job</h2><p style={{...muted,margin:0}}>{task||"No repair task entered"}</p></div><div style={{display:"flex",gap:8,flexWrap:"wrap"}}><button onClick={copyPackage} style={secondary} disabled={!packageParts.length}>Copy parts list</button><button onClick={savePackage} style={primary}>Save package</button></div></div>
      <div style={{overflow:"auto",border:"1px solid #252c39",borderRadius:10}}><table style={table}><thead><tr>{["PART #","PART NAME","PART COST",""].map((x,i)=><th key={`${x}-${i}`} style={th}>{x}</th>)}</tr></thead><tbody>{packageParts.map(p=><tr key={identity(p)}><td style={td}><strong>{p.partNumber||"—"}</strong></td><td style={td}>{p.name}</td><td style={{...td,textAlign:"right",fontWeight:800}}>{effectiveCost(p)>0?money(effectiveCost(p)):"—"}</td><td style={td}><button onClick={()=>removeFromPackage(p)} style={mini}>Remove</button></td></tr>)}{!packageParts.length&&<tr><td colSpan={4} style={{...td,textAlign:"center",color:"#7d8596",padding:28}}>Add every part needed for this repair.</td></tr>}</tbody><tfoot><tr><td colSpan={2} style={{...td,textAlign:"right",fontWeight:800}}>PACKAGE TOTAL</td><td style={{...td,textAlign:"right",fontWeight:900,fontSize:14}}>{money(totalCost)}</td><td style={td}/></tr></tfoot></table></div>
    </section>

    <section style={panel}><div style={sectionHead}><div><h2 style={h2}>Saved repair packages</h2><p style={{...muted,margin:0}}>Open a package before a repair to see the complete parts list and total.</p></div><strong>{saved.length}</strong></div>{saved.length?<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:9}}>{saved.map(pkg=><button key={pkg.id} onClick={()=>loadPackage(pkg)} style={{...secondary,height:"auto",padding:13,textAlign:"left",display:"grid",gap:5}}><strong>{pkg.task||pkg.name}</strong><span style={{fontSize:12,color:"#aab1bf"}}>{pkg.model||"No model"} · {pkg.parts.length} parts · {money(pkg.parts.reduce((s,p)=>s+effectiveCost(p),0))}</span></button>)}</div>:<div style={{color:"#7d8596",fontSize:13}}>No saved packages yet.</div>}</section>
  </div></main>
}

const panel:CSSProperties={border:"1px solid #252c39",borderRadius:12,background:"#10151f",padding:16};
const sectionHead:CSSProperties={display:"flex",justifyContent:"space-between",gap:12,alignItems:"center",flexWrap:"wrap",marginBottom:10};
const formGrid:CSSProperties={display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))",gap:10};
const lookupGrid:CSSProperties={display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))",gap:10,alignItems:"end"};
const twoCol:CSSProperties={display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:14};
const h2:CSSProperties={fontSize:16,margin:"0 0 8px"};
const muted:CSSProperties={fontSize:12,color:"#8c94a5",lineHeight:1.5};
const input:CSSProperties={width:"100%",boxSizing:"border-box",background:"#090d14",color:"#f4f4f7",border:"1px solid #30394b",borderRadius:8,padding:"10px 11px",fontSize:13};
const primary:CSSProperties={background:"#7667f5",color:"white",border:0,borderRadius:8,padding:"10px 13px",fontWeight:800,cursor:"pointer"};
const secondary:CSSProperties={background:"#151b26",color:"#eef0f5",border:"1px solid #30394b",borderRadius:8,padding:"9px 11px",fontWeight:700,cursor:"pointer"};
const mini:CSSProperties={...secondary,padding:"6px 8px",fontSize:11};
const table:CSSProperties={width:"100%",borderCollapse:"collapse",fontSize:12};
const th:CSSProperties={textAlign:"left",padding:"9px 10px",color:"#7d8596",fontSize:10,letterSpacing:".05em",borderBottom:"1px solid #252c39",whiteSpace:"nowrap"};
const td:CSSProperties={padding:"9px 10px",borderBottom:"1px solid #202734",verticalAlign:"top"};
const label:CSSProperties={display:"grid",gap:6,fontSize:10,color:"#8c94a5",fontWeight:800,letterSpacing:".05em"};