"use client";

import Link from "next/link";
import { useState } from "react";
import { scopeIsolationScript } from "@/lib/scope-isolation-script";

export default function ScopeTemplatesPage() {
  const [status,setStatus]=useState("Opening Scope Templates…");

  const installHierarchy=(frame:HTMLIFrameElement)=>{
    try{
      const doc=frame.contentDocument;
      if(!doc)return;
      const prior=doc.getElementById("master-hub-scope-isolation");
      if(prior)prior.remove();
      const script=doc.createElement("script");
      script.id="master-hub-scope-isolation";
      script.textContent=scopeIsolationScript;
      doc.body.appendChild(script);
      const controls=Array.from(doc.querySelectorAll<HTMLElement>("button,[role='tab'],a"));
      const target=controls.find(el=>el.textContent?.trim()==="Scope Templates");
      if(target){
        target.click();
        setStatus("Scope Templates · Device → SubDevice scope isolation active");
      }else{
        setStatus("BW Dashboard loaded — choose Scope Templates");
      }
    }catch{
      setStatus("BW Dashboard loaded");
    }
  };

  return <main style={{minHeight:"100vh",background:"#07090d",color:"#f4f6f8",display:"grid",gridTemplateRows:"auto 1fr"}}>
    <header style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,padding:"12px 16px",borderBottom:"1px solid #252b35",background:"#0b0e13"}}>
      <div>
        <div style={{fontSize:10,letterSpacing:".12em",color:"#707987",fontWeight:800}}>MASTER HUB · BILLED WORK</div>
        <strong style={{fontSize:18}}>Scope Templates</strong>
        <div style={{fontSize:11,color:"#8b94a3",marginTop:2}}>{status}</div>
      </div>
      <Link href="/" style={{color:"#aaa0f3",textDecoration:"none",fontWeight:800,whiteSpace:"nowrap",fontSize:12}}>← Master Hub</Link>
    </header>
    <iframe title="Master Hub Scope Templates" src="/bw-dashboard.html" onLoad={e=>installHierarchy(e.currentTarget)} style={{display:"block",width:"100%",height:"100%",minHeight:"calc(100vh - 72px)",border:0,background:"#0a0f14"}}/>
  </main>
}
