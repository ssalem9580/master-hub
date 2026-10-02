// @vitest-environment jsdom

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ScopeTemplatesPage from "@/app/scope-templates/page";

function values(select: HTMLSelectElement) {
  return Array.from(select.options).map(option => option.value).filter(Boolean);
}

describe("Scope Templates imported hierarchy", () => {
  it("only exposes scopes belonging to the selected Device and SubDevice", () => {
    render(<ScopeTemplatesPage />);

    const iframe = screen.getByTitle("Master Hub Scope Templates") as HTMLIFrameElement;
    const win = iframe.contentWindow!;
    const evaluate = (win as unknown as { eval: (code:string) => unknown }).eval.bind(win);
    const doc = iframe.contentDocument!;
    if (!doc.documentElement) doc.appendChild(doc.createElement("html"));
    if (!doc.body) doc.documentElement.appendChild(doc.createElement("body"));
    const body = doc.body!;

    body.innerHTML = `
      <button>Scope Templates</button>
      <div id="scopeView"><div class="panel"><div class="hint"></div></div></div>
      <select id="scopeCustomer"></select>
      <select id="scopeEquipment"></select>
      <select id="scopeSubcomponent"></select>
      <select id="scopeSavedScope"></select>
      <textarea id="scopeComments"></textarea>
      <input id="scopeEditingId" />
      <select id="scopeFilterCustomer"></select>
      <select id="scopeFilterEquipment"></select>
      <select id="scopeFilterSubcomponent"></select>
      <select id="fDevice"></select>
      <select id="fSubDevice"></select>
      <input id="manualTemplateSearch" />
      <div id="manualTemplateList"></div>
    `;

    evaluate(`
      var state = {
        workOrders: [
          {customer:'Bank A', device:'Vault', subdevice:'Door', scope:'Vault door will not close'},
          {customer:'Bank A', device:'Vault', subdevice:'Alarm', scope:'Test vault alarm'},
          {customer:'Bank B', device:'ATM', subdevice:'Dispenser', scope:'Clear dispenser jam'}
        ],
        scopeTemplates: [
          {id:'t1', customer:'Bank A', equipment_type:'Vault', subcomponent:'Door', scope_phrase:'Adjust vault door', comments:''}
        ],
        scopeConfig: {customers: []}
      };
      function ensureState(){}
      function escapeHtml(v){return String(v == null ? '' : v)}
      function customOptionsHtml(list,current,label){return '<option value="">'+label+'</option>'+list.map(function(v){return '<option value="'+v+'">'+v+'</option>'}).join('')+'<option value="__custom__">Custom</option>'}
      function scopeOptionHtml(list,current){return '<option value="">Select scope</option>'+list.map(function(v){return '<option value="'+v+'">'+v+'</option>'}).join('')}
      function optionsHtml(list,current,label){return '<option value="">'+label+'</option>'+list.map(function(v){return '<option value="'+v+'">'+v+'</option>'}).join('')}
      function scopeFieldChanged(){}
      function renderScopeForm(){}
      function renderScopeFilters(){}
      function renderManualTemplateList(){}
      function renderScopeLibrary(){}
      function refreshReferenceControls(){}
      async function loadCloud(){}
      function setTab(){}
      function addTemplateToManualById(){}
    `);

    fireEvent.load(iframe);
    const injected = Array.from(doc.querySelectorAll("script")).at(-1) as HTMLScriptElement;
    expect(injected?.textContent).toContain("importedHierarchy");

    const device = doc.getElementById("scopeEquipment") as HTMLSelectElement;
    const subdevice = doc.getElementById("scopeSubcomponent") as HTMLSelectElement;
    const scope = doc.getElementById("scopeSavedScope") as HTMLSelectElement;

    // jsdom can execute an appended iframe script automatically. Only evaluate manually
    // when the onLoad injection has not already populated the Device selector.
    if (!values(device).includes("Vault")) {
      expect(() => evaluate(injected.textContent || "")).not.toThrow();
    }

    expect(values(device)).toEqual(expect.arrayContaining(["ATM", "Vault", "__custom__"]));

    device.value = "Vault";
    (win as unknown as { scopeFieldChanged:(which:string)=>void }).scopeFieldChanged("device");
    expect(values(subdevice)).toEqual(expect.arrayContaining(["Alarm", "Door", "__custom__"]));
    expect(values(subdevice)).not.toContain("Dispenser");

    subdevice.value = "Door";
    (win as unknown as { scopeFieldChanged:(which:string)=>void }).scopeFieldChanged("subdevice");
    expect(values(scope)).toEqual(expect.arrayContaining(["Adjust vault door", "Vault door will not close"]));
    expect(values(scope)).not.toContain("Test vault alarm");
    expect(values(scope)).not.toContain("Clear dispenser jam");

    device.value = "ATM";
    (win as unknown as { scopeFieldChanged:(which:string)=>void }).scopeFieldChanged("device");
    expect(values(subdevice)).toContain("Dispenser");
    expect(values(subdevice)).not.toContain("Door");
  });
});