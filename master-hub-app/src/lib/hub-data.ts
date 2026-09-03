export type TaskLane = "D" | "P";
export interface HubTask { id: string; title: string; lane: TaskLane; important: boolean; complete: boolean; due?: string }
export interface HubProject { id: string; name: string; area: string; progress: number; accent: string }
export interface HubState { tasks: HubTask[]; projects: HubProject[]; notifications: number }
export interface StorageAdapter { getItem(key: string): string | null; setItem(key: string, value: string): void }
export const STORAGE_KEY = "master-hub:data";

// Master Hub starts clean. User-created actions persist locally; no demo projects,
// fake notifications, or placeholder tasks are seeded into the workspace.
export const defaultHubState: HubState = {
  notifications: 0,
  tasks: [],
  projects: []
};

export function loadHubState(storage?: StorageAdapter): HubState {
  if (!storage) return defaultHubState;
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return defaultHubState;
    const value = JSON.parse(raw);
    return value?.version === 1 && Array.isArray(value.data?.tasks)
      ? { ...defaultHubState, ...value.data, notifications: 0, projects: [] }
      : defaultHubState;
  } catch {
    return defaultHubState;
  }
}

export function saveHubState(state: HubState, storage?: StorageAdapter) {
  storage?.setItem(STORAGE_KEY, JSON.stringify({ version: 1, data: { ...state, notifications: 0, projects: [] } }));
}
