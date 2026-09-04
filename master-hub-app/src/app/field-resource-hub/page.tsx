import Link from "next/link";

const card:React.CSSProperties={display:"grid",gap:8,padding:18,border:"1px solid #283142",borderRadius:12,background:"linear-gradient(145deg,#121722,#0f141d)",color:"#eef0f5",textDecoration:"none"};

export default function FieldResourceHubPage(){
  return <main style={{minHeight:"100vh",background:"#080b12",color:"#f4f4f7",fontFamily:"Arial,sans-serif",padding:24}}>
    <div style={{maxWidth:1200,margin:"0 auto",display:"grid",gap:18}}>
      <header><div style={{fontSize:11,letterSpacing:".14em",color:"#7d8596",fontWeight:800}}>MASTER HUB · FIELD SERVICE</div><h1 style={{margin:"7px 0",fontSize:30}}>Field Resource Hub</h1><p style={{margin:0,color:"#8c94a5"}}>Diagnostics, troubleshooting resources and repeatable repair packages.</p></header>
      <section style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:12}}>
        <div style={{...card,cursor:"default"}}><strong>Field Diagnostic Hub</strong><span style={{fontSize:12,color:"#8c94a5"}}>Standalone deployment is currently unavailable. This item stays in Setup needed until its source is redeployed.</span><span style={{fontSize:11,color:"#e6b767"}}>Setup needed</span></div>
        <Link href="/repair-packages" style={card}><strong>Repair Packages & Rebuild Kits</strong><span style={{fontSize:12,color:"#8c94a5"}}>Compile parts, build complete repair packages, run Package Assistant coverage checks and copy a costed parts table.</span><span style={{fontSize:11,color:"#a99eff"}}>Open repair packages →</span></Link>
      </section>
      <section style={{padding:16,border:"1px solid #283142",borderRadius:12,background:"#10151f"}}><strong style={{fontSize:13}}>Repair-package workflow</strong><p style={{margin:"8px 0 0",fontSize:12,color:"#8c94a5",lineHeight:1.55}}>Import your parts library → describe the machine and failure → use Package Assistant to identify missing related component families → review actual library matches → save the package → copy Part Name / Part # / Compatible With / Cost with the running total.</p></section>
      <Link href="/" style={{color:"#a99eff",textDecoration:"none",fontWeight:700}}>← Master Hub</Link>
    </div>
  </main>;
}
