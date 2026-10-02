"use client";

import Link from "next/link";
import { useState } from "react";

export default function ScopeTemplatesPage() {
  const [status,setStatus]=useState("Opening Scope Templates…");

  const installHierarchy=(frame:HTMLIFrameElement)=>{
    try{
      const doc=frame.contentDocument;
      if(!doc)return;
      const script=doc.createElement("script");
      script.textContent=`(function(){
        function text(v){return String(v==null?'':v).trim()}
        function n(v){return text(v).toLowerCase().replace(/[^a-z0-9]+/g,' ').replace(/\\s+/g,' ').trim()}
        function uniquePush(arr,value){value=text(value);if(!value)return;if(!arr.some(function(v){return n(v)===n(value)}))arr.push(value)}
        function sorted(values){return values.slice().sort(function(a,b){return a.localeCompare(b,undefined,{numeric:true,sensitivity:'base'})})}
        function importedHierarchy(){
          var out={};
          function add(device,subdevice,scope){
            device=text(device);subdevice=text(subdevice);scope=text(scope);
            if(!device||!subdevice)return;
            var deviceKey=Object.keys(out).find(function(k){return n(k)===n(device)})||device;
            if(!out[deviceKey])out[deviceKey]={};
            var subKey=Object.keys(out[deviceKey]).find(function(k){return n(k)===n(subdevice)})||subdevice;
            if(!out[deviceKey][subKey])out[deviceKey][subKey]=[];
            if(scope)uniquePush(out[deviceKey][subKey],scope);
          }
          (state.workOrders||[]).forEach(function(r){add(r.device,r.subdevice,r.scope||r.description)});
          (state.scopeTemplates||[]).forEach(function(t){add(t.equipment_type,t.subcomponent,t.scope_phrase)});
          return out;
        }
        function importedCustomers(){
          var values=[];
          (state.workOrders||[]).forEach(function(r){uniquePush(values,r.customer||r.client)});
          (state.scopeTemplates||[]).forEach(function(t){uniquePush(values,t.customer)});
          (state.scopeConfig&&state.scopeConfig.customers||[]).forEach(function(v){uniquePush(values,v)});
          return sorted(values);
        }
        function deviceNames(){return sorted(Object.keys(importedHierarchy()))}
        function subDeviceNames(device){var h=importedHierarchy();return device&&h[device]?sorted(Object.keys(h[device])):[]}
        function scopeNames(device,subdevice){var h=importedHierarchy();return device&&subdevice&&h[device]&&h[device][subdevice]?sorted(h[device][subdevice]):[]}
        function keepValue(select,value){if(value&&Array.from(select.options).some(function(o){return o.value===value}))select.value=value}

        var baseFieldChanged=scopeFieldChanged;
        renderScopeForm=function(){
          ensureState();
          var customerEl=document.getElementById('scopeCustomer'),deviceEl=document.getElementById('scopeEquipment'),subEl=document.getElementById('scopeSubcomponent'),scopeEl=document.getElementById('scopeSavedScope');
          if(!customerEl||!deviceEl||!subEl||!scopeEl)return;
          var cv=customerEl.value,dv=deviceEl.value,sv=subEl.value,pv=scopeEl.value;
          customerEl.innerHTML=customOptionsHtml(importedCustomers(),cv,'Select customer');keepValue(customerEl,cv);
          deviceEl.innerHTML=customOptionsHtml(deviceNames(),dv,'Select device');keepValue(deviceEl,dv);
          var selectedDevice=deviceEl.value;
          var subs=selectedDevice&&selectedDevice!=='__custom__'?subDeviceNames(selectedDevice):[];
          subEl.innerHTML=customOptionsHtml(subs,sv,'Select SubDevice');keepValue(subEl,sv);
          var selectedSub=subEl.value;
          var scopes=selectedDevice&&selectedSub&&selectedDevice!=='__custom__'&&selectedSub!=='__custom__'?scopeNames(selectedDevice,selectedSub):[];
          scopeEl.innerHTML=scopeOptionHtml(scopes,pv);keepValue(scopeEl,pv);
          baseFieldChanged('customer');baseFieldChanged('device');baseFieldChanged('subdevice');baseFieldChanged('scope');
        };
        scopeFieldChanged=function(which){
          baseFieldChanged(which);
          if(which==='device'){
            document.getElementById('scopeSubcomponent').value='';
            document.getElementById('scopeSavedScope').value='';
            renderScopeForm();
          }else if(which==='subdevice'){
            document.getElementById('scopeSavedScope').value='';
            renderScopeForm();
          }
        };

        editScopeTemplate=function(id){
          var t=(state.scopeTemplates||[]).find(function(x){return x.id===id});if(!t)return;
          setTab('scope');renderScopeForm();
          document.getElementById('scopeCustomer').value=t.customer||'';
          document.getElementById('scopeEquipment').value=t.equipment_type||'';
          renderScopeForm();
          document.getElementById('scopeSubcomponent').value=t.subcomponent||'';
          renderScopeForm();
          document.getElementById('scopeSavedScope').value=t.scope_phrase||'';
          document.getElementById('scopeComments').value=t.comments||'';
          document.getElementById('scopeEditingId').value=t.id;
          baseFieldChanged('customer');baseFieldChanged('device');baseFieldChanged('subdevice');baseFieldChanged('scope');
          window.scrollTo({top:0,behavior:'smooth'});
        };

        renderScopeFilters=function(){
          var fc=document.getElementById('scopeFilterCustomer'),fd=document.getElementById('scopeFilterEquipment'),fs=document.getElementById('scopeFilterSubcomponent');if(!fc||!fd||!fs)return;
          var cv=fc.value,dv=fd.value,sv=fs.value;
          fc.innerHTML='<option value="">All customers</option>'+importedCustomers().map(function(x){return '<option value="'+escapeHtml(x)+'">'+escapeHtml(x)+'</option>'}).join('');keepValue(fc,cv);
          fd.innerHTML='<option value="">All devices</option>'+deviceNames().map(function(x){return '<option value="'+escapeHtml(x)+'">'+escapeHtml(x)+'</option>'}).join('');keepValue(fd,dv);
          var activeDevice=fd.value;
          var subs=activeDevice?subDeviceNames(activeDevice):[];
          fs.innerHTML='<option value="">All SubDevices</option>'+subs.map(function(x){return '<option value="'+escapeHtml(x)+'">'+escapeHtml(x)+'</option>'}).join('');keepValue(fs,sv);
          fc.onchange=function(){renderScopeLibrary()};
          fd.onchange=function(){fs.value='';renderScopeFilters();renderScopeLibrary()};
          fs.onchange=function(){renderScopeLibrary()};
        };

        function renderManualReferences(){
          var device=document.getElementById('fDevice'),sub=document.getElementById('fSubDevice');if(!device||!sub)return;
          var dv=device.value,sv=sub.value;
          device.innerHTML=optionsHtml(deviceNames(),dv,'Select device');keepValue(device,dv);
          sub.innerHTML=optionsHtml(device.value?subDeviceNames(device.value):[],sv,'Select subdevice');keepValue(sub,sv);
          device.onchange=function(){sub.innerHTML=optionsHtml(subDeviceNames(device.value),'','Select subdevice')};
        }
        refreshReferenceControls=renderManualReferences;

        var baseManualTemplateList=renderManualTemplateList;
        renderManualTemplateList=function(){
          var device=document.getElementById('fDevice')&&document.getElementById('fDevice').value||'';
          var sub=document.getElementById('fSubDevice')&&document.getElementById('fSubDevice').value||'';
          if(!device&&!sub)return baseManualTemplateList();
          var q=(document.getElementById('manualTemplateSearch').value||'').toLowerCase();
          var list=(state.scopeTemplates||[]).filter(function(t){return (!device||t.equipment_type===device)&&(!sub||t.subcomponent===sub)&&(!q||[t.customer,t.equipment_type,t.subcomponent,t.scope_phrase,t.comments].join(' ').toLowerCase().includes(q))});
          document.getElementById('manualTemplateList').innerHTML=list.length?list.map(function(t){return '<div class="lead-row"><div><b>'+escapeHtml(t.subcomponent||'Scope')+'</b><small>'+escapeHtml(t.customer)+' → '+escapeHtml(t.equipment_type)+' → '+escapeHtml(t.subcomponent)+'</small><small>'+escapeHtml(t.scope_phrase)+'</small>'+(t.comments?'<small>Comments: '+escapeHtml(t.comments)+'</small>':'')+'</div><button class="btn small primary" onclick="addTemplateToManualById(\\''+t.id+'\\')">Use</button></div>'}).join(''):'<div class="action">No scope templates match this Device / SubDevice.</div>';
        };

        var baseLoadCloud=loadCloud;
        loadCloud=async function(){await baseLoadCloud();renderScopeForm();renderScopeFilters();renderManualReferences()};
        var hint=document.querySelector('#scopeView .panel .hint');
        if(hint)hint.innerHTML='Customer → Device → SubDevice → Scope. Device, SubDevice, and Scope choices come from the exact combinations already imported or saved. A scope observed under one SubDevice is not offered under another.';
        renderScopeForm();renderScopeFilters();renderManualReferences();renderScopeLibrary();
      })();`;
      doc.body.appendChild(script);
      const controls=Array.from(doc.querySelectorAll<HTMLElement>("button,[role='tab'],a"));
      const target=controls.find(el=>el.textContent?.trim()==="Scope Templates");
      if(target){target.click();setStatus("Scope Templates · imported Device → SubDevice → Scope mapping active")}else setStatus("BW Dashboard loaded — choose Scope Templates");
    }catch{setStatus("BW Dashboard loaded")}
  };

  return <main style={{minHeight:"100vh",background:"#07090d",color:"#f4f6f8",display:"grid",gridTemplateRows:"auto 1fr"}}>
    <header style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,padding:"12px 16px",borderBottom:"1px solid #252b35",background:"#0b0e13"}}>
      <div><div style={{fontSize:10,letterSpacing:".12em",color:"#707987",fontWeight:800}}>MASTER HUB · BILLED WORK</div><strong style={{fontSize:18}}>Scope Templates</strong><div style={{fontSize:11,color:"#8b94a3",marginTop:2}}>{status}</div></div>
      <Link href="/" style={{color:"#aaa0f3",textDecoration:"none",fontWeight:800,whiteSpace:"nowrap",fontSize:12}}>← Master Hub</Link>
    </header>
    <iframe title="Master Hub Scope Templates" src="/bw-dashboard.html" onLoad={e=>installHierarchy(e.currentTarget)} style={{display:"block",width:"100%",height:"100%",minHeight:"calc(100vh - 72px)",border:0,background:"#0a0f14"}}/>
  </main>
}