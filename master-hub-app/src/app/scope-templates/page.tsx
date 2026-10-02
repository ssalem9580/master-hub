"use client";

import Link from "next/link";
import { useState } from "react";

const scopeCatalog = {
  "Locks & Electronic Locks":["ELECTRONIC LOCK","ELECTRONIC LOCK, MECHANICAL LOCK","ELECTRONIC LOCK, SAFE","ELECTRONIC LOCK, SAFE, OTHER","MECHANICAL LOCK","MECHANICAL LOCK, OTHER","OTHER, ELECTRONIC LOCK","ELECTRONIC LOCK, ELECTRONIC LOCK","SAFE, ELECTRONIC LOCK","ATM - SAFE, OTHER","LOCKS, VAULT/CA"],
  "Safe / Vault / Night Depository":["SAFE","VAULT","NIGHT DEPOSITORY","SAFE DEPOSIT BOX","SAFE, OTHER","VAULT, SAFE","CASH GUARD","CASH DRAWER"],
  "ATM / Banking Equipment":["ATM","ATM - SAFE","ATM - SAFE, OTHER","ATM, SAFE","ATM, SAFE, OTHER","CENCON","ATM - CASH","ATM - CARD READER"],
  "Drive-Up / VAT / Pneumatic":["VAT","VAT (21)","VAT (23)","VAT30","VAT30GX","PNEUMATIC","PNEUMATIC, OTHER","DRIVE-UP","CARRIER","BLOWER"],
  "Audio / Communications":["AUDIO","AUDIO SYSTEM","INTERCOM","SPEAKER","MICROPHONE","CAR CALL","CALL SYSTEM"],
  "Monitor / Display / Computer":["MONITOR","DISPLAY","TOUCH SCREEN","PC","PRINTER","TOUCH SCREEN, PRINTER, MONITOR","MONITOR, OTHER"],
  "Cash Handling / Teller":["CASH DISPENSER","CASH RECYCLER","CASH GUARD","CASH DRAWER","TELLER EQUIPMENT"],
  "Printer / Receipt / Journal":["PRINTER","RECEIPT PRINTER","JOURNAL PRINTER","PRINTER, OTHER"],
  "Card / Reader Equipment":["CARD READER","CARD READER, OTHER","MAG READER","BARCODE READER"],
  "Door / Access / Physical Security":["DOOR","DOOR, OTHER","ACCESS CONTROL","ALARM","SECURITY EQUIPMENT"],
  "Electrical / Power":["POWER SUPPLY","UPS","BATTERY","ELECTRICAL","POWER"],
  "Other / General":["OTHER","MISC","UNKNOWN"]
} as const;

export default function ScopeTemplatesPage() {
  const [status,setStatus]=useState("Opening Scope Templates…");

  const installCatalog=(frame:HTMLIFrameElement)=>{
    try{
      const doc=frame.contentDocument;
      if(!doc)return;
      const script=doc.createElement("script");
      const catalog=JSON.stringify(scopeCatalog);
      script.textContent=`(function(){
        const CATALOG=${catalog};
        const GROUPS=Object.keys(CATALOG);
        const ALL_SUBS=[...new Set(Object.values(CATALOG).flat())];
        function addUnique(arr,v){ if(!arr.some(x=>String(x).trim().toLowerCase()===String(v).trim().toLowerCase())) arr.push(v); }
        function applyCatalog(){
          try{
            ensureState();
            state.scopeConfig=state.scopeConfig||{};
            state.scopeConfig.devices=Array.isArray(state.scopeConfig.devices)?state.scopeConfig.devices:[];
            state.scopeConfig.subDevices=Array.isArray(state.scopeConfig.subDevices)?state.scopeConfig.subDevices:[];
            state.scopeConfig.subDeviceGroups=Object.assign({},state.scopeConfig.subDeviceGroups||{},CATALOG);
            GROUPS.forEach(v=>addUnique(state.scopeConfig.devices,v));
            ALL_SUBS.forEach(v=>addUnique(state.scopeConfig.subDevices,v));
            state.scopeConfig.equipmentTypes=state.scopeConfig.devices.slice();
            if(typeof persist==='function') persist();
          }catch(e){}
        }
        function groupedSubDevices(){
          try{
            const device=document.getElementById('scopeEquipment');
            const sub=document.getElementById('scopeSubcomponent');
            if(!device||!sub)return;
            const list=CATALOG[device.value];
            if(!list)return;
            const current=sub.value;
            sub.innerHTML=customOptionsHtml(list,current,'Select SubDevice');
            if(current&&list.includes(current))sub.value=current;
          }catch(e){}
        }
        applyCatalog();
        const originalRender=renderScopeForm;
        renderScopeForm=function(){ originalRender(); groupedSubDevices(); };
        const originalField=scopeFieldChanged;
        scopeFieldChanged=function(which){ originalField(which); if(which==='device')groupedSubDevices(); };
        const originalLoad=loadCloud;
        loadCloud=async function(){ await originalLoad(); applyCatalog(); originalRender(); groupedSubDevices(); renderScopeFilters(); };
        renderScopeForm(); renderScopeFilters();
      })();`;
      doc.body.appendChild(script);
      const controls=Array.from(doc.querySelectorAll<HTMLElement>("button,[role='tab'],a"));
      const target=controls.find(el=>el.textContent?.trim()==="Scope Templates");
      if(target){target.click();setStatus("Scope Templates · grouped device catalog loaded")}else setStatus("BW Dashboard loaded — choose Scope Templates");
    }catch{setStatus("BW Dashboard loaded")}
  };

  return <main style={{minHeight:"100vh",background:"#07090d",color:"#f4f6f8",display:"grid",gridTemplateRows:"auto 1fr"}}>
    <header style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,padding:"12px 16px",borderBottom:"1px solid #252b35",background:"#0b0e13"}}>
      <div><div style={{fontSize:10,letterSpacing:".12em",color:"#707987",fontWeight:800}}>MASTER HUB · BILLED WORK</div><strong style={{fontSize:18}}>Scope Templates</strong><div style={{fontSize:11,color:"#8b94a3",marginTop:2}}>{status}</div></div>
      <Link href="/" style={{color:"#aaa0f3",textDecoration:"none",fontWeight:800,whiteSpace:"nowrap",fontSize:12}}>← Master Hub</Link>
    </header>
    <iframe title="Master Hub Scope Templates" src="/bw-dashboard.html" onLoad={e=>installCatalog(e.currentTarget)} style={{display:"block",width:"100%",height:"100%",minHeight:"calc(100vh - 72px)",border:0,background:"#0a0f14"}}/>
  </main>
}
