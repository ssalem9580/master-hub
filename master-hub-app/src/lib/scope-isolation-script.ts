export const scopeIsolationScript = String.raw`(function(){
  function text(v){return String(v==null?'':v).trim()}
  function n(v){return text(v).toLowerCase().replace(/[^a-z0-9]+/g,' ').replace(/\s+/g,' ').trim()}
  function same(a,b){var av=n(a),bv=n(b);return !!av&&av===bv}
  function uniquePush(arr,value){value=text(value);if(!value)return;if(!arr.some(function(v){return same(v,value)}))arr.push(value)}
  function sorted(values){return values.slice().sort(function(a,b){return a.localeCompare(b,undefined,{numeric:true,sensitivity:'base'})})}
  function keyFor(obj,value){var wanted=n(value);return wanted?Object.keys(obj||{}).find(function(k){return n(k)===wanted})||'':''}
  function chooseValue(select,value){if(!select)return;var wanted=n(value),option=Array.from(select.options).find(function(o){return n(o.value)===wanted});if(option)select.value=option.value}
  function keepValue(select,value){if(!select||!value)return;chooseValue(select,value)}

  function importedHierarchy(){
    var out={};
    function add(device,subdevice,scope){
      device=text(device);subdevice=text(subdevice);scope=text(scope);
      if(!device||!subdevice)return;
      var deviceKey=keyFor(out,device)||device;
      if(!out[deviceKey])out[deviceKey]={};
      var subKey=keyFor(out[deviceKey],subdevice)||subdevice;
      if(!out[deviceKey][subKey])out[deviceKey][subKey]=[];
      if(scope)uniquePush(out[deviceKey][subKey],scope);
    }
    (state.workOrders||[]).forEach(function(r){add(r.device,r.subdevice,r.scope||r.description)});
    (state.reconciled||[]).forEach(function(r){add(r.device,r.subdevice,r.scope||r.description)});
    (state.scopeTemplates||[]).forEach(function(t){add(t.equipment_type,t.subcomponent,t.scope_phrase)});
    return out;
  }
  function importedCustomers(){
    var values=[];
    (state.workOrders||[]).forEach(function(r){uniquePush(values,r.customer||r.client)});
    (state.reconciled||[]).forEach(function(r){uniquePush(values,r.customer||r.client)});
    (state.scopeTemplates||[]).forEach(function(t){uniquePush(values,t.customer)});
    (state.scopeConfig&&state.scopeConfig.customers||[]).forEach(function(v){uniquePush(values,v)});
    return sorted(values);
  }
  function deviceNames(){return sorted(Object.keys(importedHierarchy()))}
  function subDeviceNames(device){var h=importedHierarchy(),dk=keyFor(h,device);return dk?sorted(Object.keys(h[dk])):[]}
  function scopeNames(device,subdevice){var h=importedHierarchy(),dk=keyFor(h,device);if(!dk)return[];var sk=keyFor(h[dk],subdevice);return sk?sorted(h[dk][sk]):[]}
  function stableRecordId(r){var raw=text(r.record_uid);if(raw)return raw.replace(/^lead_/i,'BW-').toUpperCase();return 'BW-'+String((Number(r._sourceIndex)||0)+1).padStart(4,'0')}
  function scopeCompatible(t,device,subdevice){return !!t&&same(t.equipment_type,device)&&same(t.subcomponent,subdevice)}

  window.__scopeIsolationDebug={importedHierarchy:importedHierarchy,deviceNames:deviceNames,subDeviceNames:subDeviceNames,scopeNames:scopeNames,scopeCompatible:scopeCompatible};

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
      var sub=document.getElementById('scopeSubcomponent'),scope=document.getElementById('scopeSavedScope');
      if(sub)sub.value='';if(scope)scope.value='';renderScopeForm();
    }else if(which==='subdevice'){
      var scopeOnly=document.getElementById('scopeSavedScope');if(scopeOnly)scopeOnly.value='';renderScopeForm();
    }
  };

  editScopeTemplate=function(id){
    var t=(state.scopeTemplates||[]).find(function(x){return x.id===id});if(!t)return;
    setTab('scope');renderScopeForm();
    chooseValue(document.getElementById('scopeCustomer'),t.customer||'');
    chooseValue(document.getElementById('scopeEquipment'),t.equipment_type||'');
    renderScopeForm();
    chooseValue(document.getElementById('scopeSubcomponent'),t.subcomponent||'');
    renderScopeForm();
    chooseValue(document.getElementById('scopeSavedScope'),t.scope_phrase||'');
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
    var activeDevice=fd.value,subs=activeDevice?subDeviceNames(activeDevice):[];
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

  var baseAddTemplateToManualById=addTemplateToManualById;
  renderManualTemplateList=function(){
    var listEl=document.getElementById('manualTemplateList');if(!listEl)return;
    var device=document.getElementById('fDevice')&&document.getElementById('fDevice').value||'';
    var sub=document.getElementById('fSubDevice')&&document.getElementById('fSubDevice').value||'';
    if(!device||!sub){listEl.innerHTML='<div class="action">Select a Device and SubDevice first. Only scopes saved for that exact grouping will be available.</div>';return}
    var q=n(document.getElementById('manualTemplateSearch')&&document.getElementById('manualTemplateSearch').value||'');
    var list=(state.scopeTemplates||[]).filter(function(t){var hay=n([t.customer,t.equipment_type,t.subcomponent,t.scope_phrase,t.comments].join(' '));return scopeCompatible(t,device,sub)&&(!q||hay.includes(q))});
    listEl.innerHTML=list.length?list.map(function(t){return '<div class="lead-row"><div><b>'+escapeHtml(t.scope_phrase||'Scope')+'</b><small>'+escapeHtml(t.equipment_type)+' → '+escapeHtml(t.subcomponent)+'</small>'+(t.comments?'<small>Comments: '+escapeHtml(t.comments)+'</small>':'')+'</div><button class="btn small primary" onclick="addTemplateToManualById(\''+t.id+'\')">Use</button></div>'}).join(''):'<div class="action">No saved scope templates belong to this Device / SubDevice.</div>';
  };
  addTemplateToManualById=function(id){
    var t=(state.scopeTemplates||[]).find(function(x){return x.id===id});
    var device=document.getElementById('fDevice')&&document.getElementById('fDevice').value||'';
    var sub=document.getElementById('fSubDevice')&&document.getElementById('fSubDevice').value||'';
    if(!t||!scopeCompatible(t,device,sub)){alert('This scope is not assigned to the selected Device / SubDevice.');return}
    return baseAddTemplateToManualById(id);
  };

  function scopeTemplateCard(t){
    return '<div class="template-card"><div class="template-meta"><span class="badge">'+escapeHtml(t.customer)+'</span></div><div class="template-phrase">'+escapeHtml(t.scope_phrase)+'</div>'+(t.comments?'<div class="hint" style="margin-top:8px"><b>Comments:</b> '+escapeHtml(t.comments)+'</div>':'')+'<div class="template-actions"><button class="btn small primary" onclick="openAttachModal(\''+t.id+'\')">Attach to BW Lead</button><button class="btn small" onclick="useTemplateInManual(\''+t.id+'\')">Use in Manual Entry</button><button class="btn small" onclick="copyScopeTemplate(\''+t.id+'\')">Copy Scope</button><button class="btn small" onclick="editScopeTemplate(\''+t.id+'\')">Edit</button><button class="btn small danger" onclick="deleteScopeTemplate(\''+t.id+'\')">Delete</button></div></div>';
  }
  function renderOrganizedScopeLibrary(){
    var target=document.getElementById('scopeLibrary');if(!target)return;
    var q=n(document.getElementById('scopeSearch')&&document.getElementById('scopeSearch').value||'');
    var fc=document.getElementById('scopeFilterCustomer')&&document.getElementById('scopeFilterCustomer').value||'';
    var fd=document.getElementById('scopeFilterEquipment')&&document.getElementById('scopeFilterEquipment').value||'';
    var fs=document.getElementById('scopeFilterSubcomponent')&&document.getElementById('scopeFilterSubcomponent').value||'';
    var list=(state.scopeTemplates||[]).filter(function(t){var hay=n([t.customer,t.equipment_type,t.subcomponent,t.scope_phrase,t.comments].join(' '));return (!fc||same(t.customer,fc))&&(!fd||same(t.equipment_type,fd))&&(!fs||same(t.subcomponent,fs))&&(!q||hay.includes(q))}).sort(function(a,b){return text(a.equipment_type).localeCompare(text(b.equipment_type),undefined,{numeric:true,sensitivity:'base'})||text(a.subcomponent).localeCompare(text(b.subcomponent),undefined,{numeric:true,sensitivity:'base'})||text(a.scope_phrase).localeCompare(text(b.scope_phrase),undefined,{numeric:true,sensitivity:'base'})});
    if(!list.length){target.innerHTML='<div class="action">No saved scope templates match the selected Device / SubDevice.</div>';return}
    var html=[],last='';
    list.forEach(function(t){var group=n(t.equipment_type)+'|'+n(t.subcomponent);if(group!==last){html.push('<div style="grid-column:1/-1;margin:8px 0 0;padding:9px 11px;border:1px solid #2c3440;border-radius:8px;background:#0d1218"><b>'+escapeHtml(t.equipment_type||'Unassigned device')+' → '+escapeHtml(t.subcomponent||'Unassigned SubDevice')+'</b></div>');last=group}html.push(scopeTemplateCard(t))});
    target.innerHTML=html.join('');
  }

  function renderScopeSourceRecords(){
    var view=document.getElementById('scopeView');if(!view)return;
    var panel=document.getElementById('scopeSourceRecords');
    if(!panel){
      panel=document.createElement('div');panel.id='scopeSourceRecords';panel.className='panel';
      panel.innerHTML='<h2>Scope Records</h2><div class="table-note">Imported scope records are grouped by Device → SubDevice. The current Device/SubDevice filters apply here too.</div><div class="tablewrap"><table style="min-width:900px"><thead><tr><th>ID</th><th>Attachments</th><th>Payout Amount</th><th>Scope</th><th>Comments</th><th>Customer</th><th>Labor $</th><th>Parts $</th></tr></thead><tbody id="scopeSourceBody"></tbody></table></div>';
      view.appendChild(panel);
    }
    var fd=document.getElementById('scopeFilterEquipment')&&document.getElementById('scopeFilterEquipment').value||'';
    var fs=document.getElementById('scopeFilterSubcomponent')&&document.getElementById('scopeFilterSubcomponent').value||'';
    var rows=(state.reconciled||[]).filter(function(r){return text(r.scope||r.description)&&(!fd||same(r.device,fd))&&(!fs||same(r.subdevice,fs))}).sort(function(a,b){return text(a.device).localeCompare(text(b.device),undefined,{numeric:true,sensitivity:'base'})||text(a.subdevice).localeCompare(text(b.subdevice),undefined,{numeric:true,sensitivity:'base'})});
    var body=document.getElementById('scopeSourceBody');if(!body)return;
    if(!rows.length){body.innerHTML='<tr><td colspan="8">No scope records are available for this Device / SubDevice.</td></tr>';return}
    var html=[],last='';
    rows.forEach(function(r){var group=n(r.device)+'|'+n(r.subdevice);if(group!==last){html.push('<tr class="statusgroup"><td colspan="8">'+escapeHtml(r.device||'Unassigned device')+' → '+escapeHtml(r.subdevice||'Unassigned SubDevice')+'</td></tr>');last=group}html.push('<tr><td><code style="white-space:nowrap">'+escapeHtml(stableRecordId(r))+'</code></td><td class="editcell" contenteditable="true" onblur="updateRecordField('+r._sourceIndex+',\'attachments\',this.textContent);setTimeout(renderScopeSourceRecords,0)">'+escapeHtml(r.attachments)+'</td><td class="editcell" contenteditable="true" onblur="updateRecordField('+r._sourceIndex+',\'payout_amount\',this.textContent);setTimeout(renderScopeSourceRecords,0)">'+tableMoney(r.payout_amount!=null?r.payout_amount:r.amount_paid)+'</td><td>'+templateBadge(r)+'<div class="editcell" contenteditable="true" onblur="updateRecordField('+r._sourceIndex+',\'scope\',this.textContent);setTimeout(renderScopeSourceRecords,0)">'+escapeHtml(r.scope||r.description)+'</div></td><td class="editcell" contenteditable="true" onblur="updateRecordField('+r._sourceIndex+',\'comments\',this.textContent);setTimeout(renderScopeSourceRecords,0)">'+escapeHtml(r.comments||r.notes)+'</td><td class="editcell" contenteditable="true" onblur="updateRecordField('+r._sourceIndex+',\'customer\',this.textContent);setTimeout(renderScopeSourceRecords,0)">'+escapeHtml(r.customer||r.client)+'</td><td class="editcell" contenteditable="true" onblur="updateRecordField('+r._sourceIndex+',\'labor_amount\',this.textContent);setTimeout(renderScopeSourceRecords,0)">'+tableMoney(r.labor_amount)+'</td><td class="editcell" contenteditable="true" onblur="updateRecordField('+r._sourceIndex+',\'parts_amount\',this.textContent);setTimeout(renderScopeSourceRecords,0)">'+tableMoney(r.parts_amount)+'</td></tr>')});
    body.innerHTML=html.join('');
  }

  var baseOpenAttachModal=openAttachModal;
  var baseAttachActiveTemplateToLead=attachActiveTemplateToLead;
  openAttachModal=function(id){window.__scopeAttachTemplateId=id;return baseOpenAttachModal(id)};
  renderAttachLeadList=function(){
    var id=window.__scopeAttachTemplateId,t=(state.scopeTemplates||[]).find(function(x){return x.id===id});
    var target=document.getElementById('attachLeadList');if(!target)return;
    if(!t){target.innerHTML='<div class="action">Choose a scope template first.</div>';return}
    var q=n(document.getElementById('attachLeadSearch')&&document.getElementById('attachLeadSearch').value||'');
    var rows=(state.reconciled||[]).filter(function(r){var hay=n([r.sr_number,r.customer,r.device,r.subdevice,r.city,r.status,r.scope].join(' '));return same(r.device,t.equipment_type)&&same(r.subdevice,t.subcomponent)&&(!q||hay.includes(q))});
    target.innerHTML=rows.length?rows.slice(0,100).map(function(r){var links=Array.isArray(r.scope_template_snapshots)?r.scope_template_snapshots:[];return '<div class="lead-row"><div><b>SR '+escapeHtml(r.sr_number||r.wo_id||'None')+'</b> · '+escapeHtml(r.customer||'No customer')+'<small>'+escapeHtml(r.device||'No device')+' → '+escapeHtml(r.subdevice||'No SubDevice')+' · '+escapeHtml(r.city||'No city')+' · '+escapeHtml(r.status||'')+(links.length?' · '+links.length+' template(s)':'')+'</small></div><button class="btn small primary" onclick="attachActiveTemplateToLead('+r._sourceIndex+')">Attach</button></div>'}).join(''):'<div class="action">No BW leads belong to '+escapeHtml(t.equipment_type)+' → '+escapeHtml(t.subcomponent)+'.</div>';
  };
  attachActiveTemplateToLead=function(sourceIndex){
    var id=window.__scopeAttachTemplateId,t=(state.scopeTemplates||[]).find(function(x){return x.id===id});
    var effective=(state.reconciled||[]).find(function(r){return r._sourceIndex===sourceIndex})||(state.workOrders||[])[sourceIndex];
    if(!t||!effective||!scopeCompatible(t,effective.device,effective.subdevice)){alert('This scope belongs to '+(t?t.equipment_type+' → '+t.subcomponent:'another Device / SubDevice')+' and cannot be attached here.');return}
    return baseAttachActiveTemplateToLead(sourceIndex);
  };

  renderScopeLibrary=function(){renderOrganizedScopeLibrary();renderScopeSourceRecords()};
  var baseLoadCloud=loadCloud;
  loadCloud=async function(){await baseLoadCloud();renderScopeForm();renderScopeFilters();renderManualReferences();renderScopeLibrary()};
  var hint=document.querySelector('#scopeView .panel .hint');
  if(hint)hint.innerHTML='Customer → Device → SubDevice → Scope. Every imported/saved scope stays inside the Device and SubDevice where it was found. Scopes cannot be selected or attached across groups.';
  renderScopeForm();renderScopeFilters();renderManualReferences();renderScopeLibrary();
})();`;
