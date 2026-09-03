import { describe, expect, it } from "vitest";
import { defaultHubState, loadHubState, saveHubState, STORAGE_KEY } from "@/lib/hub-data";
function memory(initial: string | null = null) { let value = initial; return { getItem: () => value, setItem: (_key: string, next: string) => { value = next; }, value: () => value }; }
describe("versioned hub data", () => {
 it("falls back for missing, corrupt, and future data", () => { expect(loadHubState(memory())).toEqual(defaultHubState); expect(loadHubState(memory("{bad"))).toEqual(defaultHubState); expect(loadHubState(memory('{"version":2,"data":{}}'))).toEqual(defaultHubState); });
 it("saves and reloads version 1 state", () => { const store = memory(); saveHubState(defaultHubState, store); expect(JSON.parse(store.value()!)).toMatchObject({ version: 1, data: defaultHubState }); expect(loadHubState(store)).toEqual(defaultHubState); expect(STORAGE_KEY).toBe("master-hub:data"); });
});