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

export default function ProjectControlPage(){
 return <main style={{minHeight:"100vh",background:"#080b12",color:"#f4f4f7",fontFamily:"Arial,sans-serif",padding:24}}>
  <div style={{maxWidth:1180,margin:"0 auto",display:"grid",gap:18}}>
   <header><div style={{fontSize:11,letterSpacing:".14em",color:"#7d8596",fontWeight:800}}>MASTER HUB · PROJECT OPERATIONS</div><h1 style={{margin:"7px 0",fontSize:30}}>Project Control Center</h1><p style={{margin:0,color:"#8c94a5",maxWidth:820,lineHeight:1.55}}>Single control center for queue, build/deployment, bugs/testing, ideas, restricted data, integrations, UI/UX, releases and canonical governance.</p></header>
   <section style={{padding:16,border:"1px solid #283142",borderRadius:12,background:"#10151f",display:"grid",gap:8}}>
    <strong style={{fontSize:13}}>Operating rule</strong>
    <span style={{fontSize:12,color:"#aeb5c3",lineHeight:1.55}}>Evidence over assumption · Reality over intended state · Approval over silent change · Verification over generated output · Traceability over memory.</span>
   </section>
   <section style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))",gap:10}}>
    {items.map(([id,name,description])=><div key={id} style={{padding:15,border:"1px solid #283142",borderRadius:10,background:"#10151f",display:"grid",gap:6}}><span style={{fontSize:11,color:"#8c94a5",fontWeight:800}}>{id}</span><strong>{name}</strong><span style={{fontSize:12,color:"#8c94a5",lineHeight:1.45}}>{description}</span></div>)}
   </section>
   <section style={{padding:16,border:"1px solid #283142",borderRadius:12,background:"#10151f",display:"grid",gap:12}}>
    <div><strong style={{fontSize:13}}>Live operations snapshot</strong><p style={{margin:"8px 0 0",fontSize:12,color:"#8c94a5",lineHeight:1.55}}>Latest main is ahead of production. Repair Package Part # auto-fill and the newest master-parts source are built but not yet verified in production because later Vercel builds are rate-limited.</p></div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))",gap:8}}>
     {[
      ["Queue","9 tracked items"],
      ["Build","BLOCKED · rate limit"],
      ["Bugs","1 ready for retest"],
      ["Security","CRITICAL containment open"],
      ["Release","READY FOR REVIEW"],
     ].map(([k,v])=><div key={k} style={{border:"1px solid #283142",borderRadius:9,padding:11,background:"#0c111a"}}><span style={{display:"block",fontSize:10,color:"#7d8596",letterSpacing:".08em",fontWeight:800}}>{k.toUpperCase()}</span><strong style={{display:"block",marginTop:5,fontSize:13}}>{v}</strong></div>)}
    </div>
   </section>
   <Link href="/" style={{color:"#a99eff",textDecoration:"none",fontWeight:700}}>← Master Hub</Link>
  </div>
 </main>
}
