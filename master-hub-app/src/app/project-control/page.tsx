import fs from "node:fs";
import path from "node:path";
import Link from "next/link";

const items=[
["01","Master Project Brief","Identity, product boundary, users, workflow and known risks."],
["02","Project Constitution","Permanent principles, evidence rules, terminology and change control."],
["03","Decision Log","Approved, rejected, modified and superseded decisions."],
["04","Feature Register","Every feature and its status, MVP boundary and evidence."],
["05","Build Roadmap","Controlled phases that organize approved scope."],
["06","Current State","What is actually implemented, tested, verified, blocked and deployed."],
["07","Open Issues","Unresolved product, technical, data, UX, security and business issues."],
["08","Checkpoint","Restart file for a new AI or developer."],
["09","Requirements Register","Requirement IDs, acceptance criteria, implementation and verification."],
["10","Test Register","Tests mapped to requirements and evidence."],
["11","Defect Register","Known defects and resolution status."],
["12","Risk Register","Material project risks and mitigations."],
["13","Changelog","Chronological controlled changes."],
["14","Dependency Register","External/internal dependencies and their risks."],
["15","Data Dictionary","Canonical project data terms and fields."],
["16","Security & Privacy","Data boundaries, privacy and security rules."],
["17","Release Checklist","Conditions required before release/finalization."],
["18","Rollback & Recovery","Known-good recovery sources and rollback procedure."],
["19","User Feedback Register","Material owner/user feedback preserved as evidence."],
["20","Technical Debt Register","Known maintenance and architecture debt."],
["21","Traceability Matrix","Need → decision → requirement → feature → implementation → test → evidence → acceptance."],
["22","Project Operations & Queue","Operational queue, deployments, bugs, ideas, restricted data, integrations, UX and release state."],
];

function readControlFile(name:string){
 const roots=[path.resolve(process.cwd(),"..","PROJECT CONTROL SYSTEM"),path.resolve(process.cwd(),"PROJECT CONTROL SYSTEM")];
 for(const root of roots){
  const file=path.join(root,name);
  try{if(fs.existsSync(file))return fs.readFileSync(file,"utf8")}catch{}
 }
 return "";
}

function field(source:string,label:string,fallback="UNKNOWN"){
 const safe=label.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
 const match=source.match(new RegExp(`^${safe}:\\s*(.+)$`,"mi"));
 return match?.[1]?.trim()||fallback;
}

function rowStatus(source:string,id:string,statusIndex:number){
 const row=source.split(/\r?\n/).find(line=>line.trim().startsWith(`| ${id} |`));
 if(!row)return "UNKNOWN";
 const cells=row.split("|").map(cell=>cell.trim()).filter(Boolean);
 return cells[statusIndex]||"UNKNOWN";
}

function queueCount(source:string){return source.split(/\r?\n/).filter(line=>/^\|\s*QUEUE-\d+\s*\|/.test(line)).length}

export default function ProjectControlPage(){
 const current=readControlFile("06_CURRENT_STATE.md");
 const queue=readControlFile("22_PROJECT_OPERATIONS_QUEUE.md");
 const defects=readControlFile("11_DEFECT_REGISTER.md");
 const productionCommit=field(current,"CURRENT_PRODUCTION_COMMIT");
 const deployment=field(current,"CURRENT_DEPLOYMENT");
 const buildStatus=field(current,"BUILD_STATUS");
 const securityStatus=field(current,"SECURITY_STATUS");
 const scopeStatus=field(current,"SCOPE_ISOLATION_STATUS");
 const repairStatus=rowStatus(defects,"DEF-010",3);
 const scopeQueue=rowStatus(queue,"QUEUE-010",4);
 const repairQueue=rowStatus(queue,"QUEUE-002",4);
 const tracked=queueCount(queue);
 const deployedRevision=process.env.VERCEL_GIT_COMMIT_SHA||productionCommit;

 return <main style={{minHeight:"100vh",background:"#080b12",color:"#f4f4f7",fontFamily:"Arial,sans-serif",padding:24}}>
  <div style={{maxWidth:1180,margin:"0 auto",display:"grid",gap:18}}>
   <header><div style={{fontSize:11,letterSpacing:".14em",color:"#7d8596",fontWeight:800}}>MASTER HUB · PROJECT OPERATIONS</div><h1 style={{margin:"7px 0",fontSize:30}}>Project Control Center</h1><p style={{margin:0,color:"#8c94a5",maxWidth:840,lineHeight:1.55}}>Live status below is generated from the canonical Current State, Operations Queue and Defect Register at build time. Static status duplication has been removed.</p></header>
   <section style={{padding:16,border:"1px solid #283142",borderRadius:12,background:"#10151f",display:"grid",gap:8}}>
    <strong style={{fontSize:13}}>Operating rule</strong>
    <span style={{fontSize:12,color:"#aeb5c3",lineHeight:1.55}}>Evidence over assumption · Reality over intended state · Approval over silent change · Verification over generated output · Traceability over memory.</span>
   </section>
   <section style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))",gap:10}}>
    {items.map(([id,name,description])=><div key={id} style={{padding:15,border:"1px solid #283142",borderRadius:10,background:"#10151f",display:"grid",gap:6}}><span style={{fontSize:11,color:"#8c94a5",fontWeight:800}}>{id}</span><strong>{name}</strong><span style={{fontSize:12,color:"#8c94a5",lineHeight:1.45}}>{description}</span></div>)}
   </section>
   <section style={{padding:16,border:"1px solid #283142",borderRadius:12,background:"#10151f",display:"grid",gap:12}}>
    <div><strong style={{fontSize:13}}>Live operations snapshot</strong><p style={{margin:"8px 0 0",fontSize:12,color:"#8c94a5",lineHeight:1.55}}>Production {deployment} · deployed revision {deployedRevision}. Repair Package defect status: {repairStatus}. Scope-isolation queue status: {scopeQueue}. Restricted-data containment remains independently governed by the canonical security record.</p></div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))",gap:8}}>
     {[
      ["Queue",`${tracked} tracked items`],
      ["Build",buildStatus],
      ["Repair Packages",`${repairStatus} · ${repairQueue}`],
      ["Scope Isolation",`${scopeStatus} · ${scopeQueue}`],
      ["Security",securityStatus],
     ].map(([k,v])=><div key={k} style={{border:"1px solid #283142",borderRadius:9,padding:11,background:"#0c111a"}}><span style={{display:"block",fontSize:10,color:"#7d8596",letterSpacing:".08em",fontWeight:800}}>{k.toUpperCase()}</span><strong style={{display:"block",marginTop:5,fontSize:13}}>{v}</strong></div>)}
    </div>
   </section>
   <Link href="/" style={{color:"#a99eff",textDecoration:"none",fontWeight:700}}>← Master Hub</Link>
  </div>
 </main>
}
