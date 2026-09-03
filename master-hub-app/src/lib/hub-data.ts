export type TaskLane = "D" | "P";
export interface HubTask { id: string; title: string; lane: TaskLane; important: boolean; complete: boolean; due?: string }
export interface HubProject { id: string; name: string; area: string; progress: number; accent: string }
export interface HubState { tasks: HubTask[]; projects: HubProject[]; notifications: number }
export interface StorageAdapter { getItem(key: string): string | null; setItem(key: string, value: string): void }
export const STORAGE_KEY = "master-hub:data";
export const defaultHubState: HubState = { notifications: 3, tasks: [
  { id: "t1", title: "Review Q3 operating plan", lane: "D", important: true, complete: false, due: "Today" },
  { id: "t2", title: "Send revised proposal to James", lane: "D", important: false, complete: false, due: "10:30 AM" },
  { id: "t3", title: "Book annual health screening", lane: "P", important: true, complete: false, due: "Tomorrow" },
  { id: "t4", title: "Plan Friday dinner reservation", lane: "P", important: false, complete: true }
], projects: [
  { id: "p1", name: "Studio refresh", area: "Work", progress: 72, accent: "#8b7cf6" },
  { id: "p2", name: "Fall travel", area: "Personal", progress: 46, accent: "#39b9a2" },
  { id: "p3", name: "Portfolio rebalance", area: "Financial", progress: 28, accent: "#d6a45b" }
] };
export function loadHubState(storage?: StorageAdapter): HubState {
  if (!storage) return defaultHubState;
  try { const raw = storage.getItem(STORAGE_KEY); if (!raw) return defaultHubState; const value = JSON.parse(raw); return value?.version === 1 && Array.isArray(value.data?.tasks) ? value.data : defaultHubState; } catch { return defaultHubState; }
}
export function saveHubState(state: HubState, storage?: StorageAdapter) { storage?.setItem(STORAGE_KEY, JSON.stringify({ version: 1, data: state })); }