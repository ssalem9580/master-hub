// @vitest-environment jsdom

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ScopeTemplatesPage from "@/app/scope-templates/page";

function values(select: HTMLSelectElement) {
  return Array.from(select.options).map(option => option.value).filter(Boolean);
}

describe("Scope Templates imported hierarchy", () => {
  it("keeps every imported scope inside its Device and SubDevice grouping", () => {
    render(<ScopeTemplatesPage />);

    const iframe = screen.getByTitle("Master Hub Scope Templates") as HTMLIFrameElement;
    const win = iframe.contentWindow!;
    const evaluate = (win as unknown as { eval: (code:string) => unknown }).eval.bind(win);
    const doc = iframe.contentDocument!;
    if (!doc.documentElement) doc.appendChild(doc.createElement("html"));
    if (!doc.body) doc.documentElement.appendChild(doc.createElement("body"));

    doc.body.innerHTML = `
      <button>Scope Templates</button>
      <div id="scopeView"><div class="panel"><div class="hint"></div></div></div>
      <select id="scopeCustomer"></select>
      <select id="scopeEquipment"></select>
      <select id="scopeSubcomponent"></select>
      <select id="scopeSavedScope"></select>
      <textarea id="scopeComments"></textarea>
      <input id="scopeEditingId" />
      <input id="scopeSearch" />
      <select id="scopeFilterCustomer"></select>
      <select id="scopeFilterEquipment"></select>
      <select id="scopeFilterSubcomponent"></select>
      <div id="scopeLibrary"></div>
      <select id="fDevice"></select>
      <select id="fSubDevice"></select>
      <input id="manualTemplateSearch" />
      <div id="manualTemplateList"></div>
      <div id="attachTemplateSummary"></div>
      <input id="attachLeadSearch" />
      <div id="attachLeadList"></div>
      <div id="attachModal"></div>
    `;

    evaluate(`
      var state = {
        workOrders: [
          {customer:'Bank A', device:'Vault', subdevice:'Door', scope:'Vault door will not close', sr_number:'SR-1'},
          {customer:'Bank A', device:'Vault', subdevice:'Alarm', scope:'Test vault alarm', sr_number:'SR-2'},
          {customer:'Bank B', device:'ATM', subdevice:'Dispenser', scope:'Clear dispenser jam', sr_number:'SR-3'},
          {customer:'Bank A', device:' vault ', subdevice:'door', scope:'Inspect vault hinges', sr_number:'SR-4'}
        ],
        reconciled: [
          {_sourceIndex:0, customer:'Bank A', device:'Vault', subdevice:'Door', scope:'Vault door will not close', sr_number:'SR-1'},
          {_sourceIndex:1, customer:'Bank A', device:'Vault', subdevice:'Alarm', scope:'Test vault alarm', sr_number:'SR-2'},
          {_sourceIndex:2, customer:'Bank B', device:'ATM', subdevice:'Dispenser', scope:'Clear dispenser jam', sr_number:'SR-3'},
          {_sourceIndex:3, customer:'Bank A', device:' vault ', subdevice:'door', scope:'Inspect vault hinges', sr_number:'SR-4'},
          {_sourceIndex:4, customer:'Bank A', device:'Vault', subdevice:'Time Lock', scope:'Service vault time lock', sr_number:'SR-5'}
        ],
        scopeTemplates: [
          {id:'t1', customer:'Bank A', equipment_type:'Vault', subcomponent:'Door', scope_phrase:'Adjust vault door', comments:''},
          {id:'t2', customer:'Bank A', equipment_type:'Vault', subcomponent:'Alarm', scope_phrase:'Test alarm contacts', comments:''},
          {id:'t3', customer:'Bank B', equipment_type:'ATM', subcomponent:'Dispenser', scope_phrase:'Service dispenser', comments:''}
        ],
        scopeConfig: {customers: []}
      };
      function ensureState(){}
      function escapeHtml(v){return String(v == null ? '' : v)}
      function customOptionsHtml(list,current,label){return '<option value="">'+label+'</option>'+list.map(function(v){return '<option value="'+v+'">'+v+'</option>'}).join('')+'<option value="__custom__">Custom</option>'}
      function scopeOptionHtml(list,current){return '<option value="">Select scope</option>'+list.map(function(v){return '<option value="'+v+'">'+v+'</option>'}).join('')+'<option value="__custom__">Custom</option>'}
      function optionsHtml(list,current,label){return '<option value="">'+label+'</option>'+list.map(function(v){return '<option value="'+v+'">'+v+'</option>'}).join('')}
      function scopeFieldChanged(){}
      function renderScopeForm(){}
      function renderScopeFilters(){}
      function renderManualTemplateList(){}
      function renderScopeLibrary(){}
      function refreshReferenceControls(){}
      function renderAttachLeadList(){}
      async function loadCloud(){}
      function setTab(){}
      function addTemplateToManualById(id){window.__manualTemplateId=id}
      function useTemplateInManual(){}
      function copyScopeTemplate(){}
      function deleteScopeTemplate(){}
      function updateRecordField(){}
      function tableMoney(){return '$0.00'}
      function templateBadge(){return ''}
      function openAttachModal(id){window.__baseOpenTemplate=id;renderAttachLeadList()}
      function attachActiveTemplateToLead(sourceIndex){window.__attachedSourceIndex=sourceIndex}
      function alert(message){window.__lastAlert=message}
    `);

    fireEvent.load(iframe);
    const injected = doc.getElementById("master-hub-scope-isolation") as HTMLScriptElement;
    expect(injected?.textContent).toContain("importedHierarchy");

    const device = doc.getElementById("scopeEquipment") as HTMLSelectElement;
    const subdevice = doc.getElementById("scopeSubcomponent") as HTMLSelectElement;
    const scope = doc.getElementById("scopeSavedScope") as HTMLSelectElement;

    if (!values(device).includes("Vault")) {
      expect(() => evaluate(injected.textContent || "")).not.toThrow();
    }

    expect(values(device)).toEqual(expect.arrayContaining(["ATM", "Vault", "__custom__"]));
    expect(values(device).filter(v => v.toLowerCase().trim() === "vault")).toHaveLength(1);

    device.value = "Vault";
    evaluate("scopeFieldChanged('device')");
    expect(values(subdevice)).toEqual(expect.arrayContaining(["Alarm", "Door", "Time Lock", "__custom__"]));
    expect(values(subdevice)).not.toContain("Dispenser");

    subdevice.value = "Door";
    evaluate("scopeFieldChanged('subdevice')");
    expect(values(scope)).toEqual(expect.arrayContaining(["Adjust vault door", "Vault door will not close", "Inspect vault hinges"]));
    expect(values(scope)).not.toContain("Test vault alarm");
    expect(values(scope)).not.toContain("Clear dispenser jam");
    expect(values(scope)).not.toContain("Service vault time lock");

    subdevice.value = "Time Lock";
    evaluate("scopeFieldChanged('subdevice')");
    expect(values(scope)).toContain("Service vault time lock");
    expect(values(scope)).not.toContain("Adjust vault door");

    device.value = "ATM";
    evaluate("scopeFieldChanged('device')");
    expect(values(subdevice)).toContain("Dispenser");
    expect(values(subdevice)).not.toContain("Door");

    const manualDevice = doc.getElementById("fDevice") as HTMLSelectElement;
    const manualSub = doc.getElementById("fSubDevice") as HTMLSelectElement;
    manualDevice.value = "Vault";
    manualDevice.onchange?.(new Event("change"));
    manualSub.value = "Door";
    evaluate("renderManualTemplateList() ");
    const manualText = doc.getElementById("manualTemplateList")?.textContent || "";
    expect(manualText).toContain("Adjust vault door");
    expect(manualText).not.toContain("Test alarm contacts");
    expect(manualText).not.toContain("Service dispenser");

    evaluate("openAttachModal('t1')");
    const attachText = doc.getElementById("attachLeadList")?.textContent || "";
    expect(attachText).toContain("SR-1");
    expect(attachText).toContain("SR-4");
    expect(attachText).not.toContain("SR-2");
    expect(attachText).not.toContain("SR-3");
    expect(attachText).not.toContain("SR-5");

    evaluate("attachActiveTemplateToLead(2)");
    expect(evaluate("window.__attachedSourceIndex")).toBeUndefined();
    expect(String(evaluate("window.__lastAlert"))).toContain("cannot be attached");

    evaluate("attachActiveTemplateToLead(0)");
    expect(evaluate("window.__attachedSourceIndex")).toBe(0);
  });
});
