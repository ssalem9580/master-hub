"use client";

import {
  Activity,
  AlertTriangle,
  Calculator,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Command,
  ExternalLink,
  FolderKanban,
  LayoutDashboard,
  Menu,
  Plus,
  Search,
  Settings,
  Target,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { defaultHubState, HubState, HubTask, loadHubState, saveHubState, TaskLane } from "@/lib/hub-data";

type HubStatus = "Setup needed" | "Live" | "Development" | "Offline" | "Archived";
type HubItem = {
  name: string;
  url?: string;
  status: HubStatus;
  area: string;
  purpose: string;
  icon: React.ReactNode;
};

const statusOrder: HubStatus[] = ["Setup needed", "Live", "Development", "Offline", "Archived"];

const hubs: HubItem[] = [
  {
    name: "Field Diagnostic Hub",
    url: "https://field-diagnostic-hub.vercel.app",
    status: "Setup needed",
    area: "Work · Field Service",
    purpose: "Diagnostics, troubleshooting flows, technical resources and VAT audio guidance.",
    icon: <Activity size={17} />,
  },
  {
    name: "Finances Command Center",
    status: "Setup needed",
    area: "Financial",
    purpose: "Cash flow, accounts, bills, debt, goals, investments and financial actions.",
    icon: <CircleDollarSign size={17} />,
  },
  {
    name: "NTE Exceed/Quote Generator",
    url: "https://job-quote-calculator-tau.vercel.app",
    status: "Live",
    area: "Work · Quoting",
    purpose: "Build quotes and create official NTE exceed forms.",
    icon: <Calculator size={17} />,
  },
  {
    name: "Billed Work Tracker",
    url: "https://billed-work-tracker-live.vercel.app",
    status: "Live",
    area: "Work · Billing",
    purpose: "Track billed work, payment status and reconciliation.",
    icon: <FolderKanban size={17} />,
  },
  {
    name: "Recovery Value Calculator",
    url: "https://recovery-value-calculator.vercel.app",
    status: "Live",
    area: "Business · Recovery",
    purpose: "Calculate recovery values and deal economics.",
    icon: <CircleDollarSign size={17} />,
  },
  {
    name: "Private Client",
    url: "https://privateclient.samsalem0319.chatgpt.site/",
    status: "Live",
    area: "Personal",
    purpose: "Private-client workspace.",
    icon: <FolderKanban size={17} />,
  },
  {
    name: "Illinois Locksmith Exam Prep",
    url: "https://illinois-locksmith-exam-tutor.samsalem0319.chatgpt.site/",
    status: "Live",
    area: "Knowledge · Exam Prep",
    purpose: "Illinois locksmith licensing exam study and practice.",
    icon: <Target size={17} />,
  },
  {
    name: "Sam Hub",
    url: "https://sam-hub-six.vercel.app",
    status: "Live",
    area: "Admin · Registry",
    purpose: "Legacy app registry and management workspace.",
    icon: <LayoutDashboard size={17} />,
  },
];

function IconButton({ label, children, onClick, className = "" }: { label: string; children: React.ReactNode; onClick?: () => void; className?: string }) {
  return <button className={`icon-button ${className}`} aria-label={label} title={label} onClick={onClick}>{children}</button>;
}

export function MasterHub() {
  const [state, setState] = useState<HubState>(defaultHubState);
  const [ready, setReady] = useState(false);
  const [menu, setMenu] = useState(false);
  const [capture, setCapture] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<"Dashboard" | "Hub Directory" | "Action Center">("Dashboard");
  const [toast, setToast] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setState(loadHubState(window.localStorage));
      setReady(true);
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (ready) saveHubState(state, window.localStorage);
  }, [ready, state]);

  useEffect(() => {
    const keys = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchRef.current?.focus();
      }
      if (event.key === "Escape") {
        setCapture(false);
        setMenu(false);
      }
    };
    window.addEventListener("keydown", keys);
    return () => window.removeEventListener("keydown", keys);
  }, []);

  const normalizedQuery = query.trim().toLowerCase();
  const filteredHubs = useMemo(() => hubs.filter(h => {
    if (!normalizedQuery) return true;
    return `${h.name} ${h.area} ${h.status} ${h.purpose}`.toLowerCase().includes(normalizedQuery);
  }), [normalizedQuery]);
  const filteredTasks = useMemo(() => state.tasks.filter(t => t.title.toLowerCase().includes(normalizedQuery)), [state.tasks, normalizedQuery]);

  const openTasks = state.tasks.filter(t => !t.complete);
  const importantTasks = openTasks.filter(t => t.important);
  const liveCount = hubs.filter(h => h.status === "Live").length;
  const setupCount = hubs.filter(h => h.status === "Setup needed").length;
  const hubGroups = statusOrder
    .map(status => ({ status, items: filteredHubs.filter(h => h.status === status) }))
    .filter(group => group.items.length > 0);

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 1800);
  };
  const updateTask = (id: string, patch: Partial<HubTask>) => setState(s => ({ ...s, tasks: s.tasks.map(t => t.id === id ? { ...t, ...patch } : t) }));
  const removeTask = (id: string) => {
    if (window.confirm("Delete this action?")) {
      setState(s => ({ ...s, tasks: s.tasks.filter(t => t.id !== id) }));
      notify("Action deleted");
    }
  };
  const addTask = (title: string, lane: TaskLane, important: boolean) => {
    setState(s => ({ ...s, tasks: [{ id: crypto.randomUUID(), title, lane, important, complete: false, due: "" }, ...s.tasks] }));
    setCapture(false);
    notify("Action added");
  };
  const go = (view: "Dashboard" | "Hub Directory" | "Action Center") => {
    setActive(view);
    setMenu(false);
  };

  return <div className="app-shell">
    <button className={`scrim ${menu ? "visible" : ""}`} aria-label="Close navigation" onClick={() => setMenu(false)} />
    <aside className={`sidebar ${menu ? "open" : ""}`}>
      <div className="brand">
        <span className="brand-mark"><Command size={18} /></span>
        <span>MASTER HUB</span>
        <IconButton label="Close menu" className="mobile-close" onClick={() => setMenu(false)}><X size={16} /></IconButton>
      </div>
      <nav aria-label="Primary navigation">
        <div className="nav-group">
          <p>Command</p>
          <button className={`nav-item ${active === "Dashboard" ? "active" : ""}`} onClick={() => go("Dashboard")}><span className="nav-icon"><LayoutDashboard size={16} /></span><strong>Dashboard</strong></button>
          <button className={`nav-item ${active === "Hub Directory" ? "active" : ""}`} onClick={() => go("Hub Directory")}><span className="nav-icon"><FolderKanban size={16} /></span><strong>Hub Directory</strong></button>
          <button className={`nav-item ${active === "Action Center" ? "active" : ""}`} onClick={() => go("Action Center")}><span className="nav-icon"><Target size={16} /></span><strong>Action Center</strong>{openTasks.length > 0 && <em>{openTasks.length}</em>}</button>
        </div>
        <div className="nav-group">
          <p>Status</p>
          <button className="nav-item" onClick={() => { setQuery("Setup needed"); go("Hub Directory"); }}><span className="nav-icon"><AlertTriangle size={16} /></span><strong>Setup needed</strong>{setupCount > 0 && <em>{setupCount}</em>}</button>
          <button className="nav-item" onClick={() => { setQuery("Live"); go("Hub Directory"); }}><span className="nav-icon"><CheckCircle2 size={16} /></span><strong>Live</strong><em>{liveCount}</em></button>
        </div>
      </nav>
      <div className="sidebar-footer">
        <button className="profile" onClick={() => notify("Master Hub settings") }><span className="avatar">SS</span><span><strong>Sam Salem</strong><small>Workspace owner</small></span><Settings size={16} /></button>
      </div>
    </aside>

    <div className="main-wrap">
      <header className="topbar">
        <IconButton label="Open menu" className="menu-button" onClick={() => setMenu(true)}><Menu size={20} /></IconButton>
        <div className="search-wrap"><Search size={17} /><input ref={searchRef} value={query} onChange={e => setQuery(e.target.value)} placeholder="Search hubs, status or actions" /></div>
        <div className="top-actions"><button className="capture-button" onClick={() => setCapture(true)}><Plus size={15} /> Add action</button></div>
      </header>

      <main>
        {active === "Dashboard" && <>
          <section className="welcome-row">
            <div><span className="overline">MASTER CONTROL</span><h1>Master Hub</h1><p>Apps, readiness and actions. Nothing else.</p></div>
          </section>

          <section className="metric-grid" aria-label="Workspace status">
            <CompactMetric label="Live apps" value={liveCount} onClick={() => { setQuery("Live"); go("Hub Directory"); }} />
            <CompactMetric label="Setup needed" value={setupCount} warning onClick={() => { setQuery("Setup needed"); go("Hub Directory"); }} />
            <CompactMetric label="Open actions" value={openTasks.length} onClick={() => go("Action Center")} />
            <CompactMetric label="Important actions" value={importantTasks.length} warning={importantTasks.length > 0} onClick={() => go("Action Center")} />
          </section>

          <section className="content-grid">
            <div className="panel">
              <div className="panel-heading"><div><span className="overline">NEEDS ATTENTION</span><h2>Setup needed</h2></div><button className="text-button" onClick={() => { setQuery("Setup needed"); go("Hub Directory"); }}>View all <ChevronRight size={13} /></button></div>
              <div className="tool-grid">
                {hubs.filter(h => h.status === "Setup needed").map(h => <HubButton key={h.name} hub={h} />)}
                {setupCount === 0 && <div className="empty-state"><CheckCircle2 size={20} /><strong>Nothing needs setup</strong></div>}
              </div>
            </div>

            <div className="panel">
              <div className="panel-heading"><div><span className="overline">ACTIONS</span><h2>Open action list</h2></div><button className="text-button" onClick={() => setCapture(true)}>Add</button></div>
              <div>
                {openTasks.slice(0, 5).map(task => <TaskRow key={task.id} task={task} update={patch => updateTask(task.id, patch)} remove={() => removeTask(task.id)} />)}
                {openTasks.length === 0 && <div className="empty-state"><Target size={20} /><strong>No open actions</strong><span>Add only work that actually needs tracking.</span></div>}
              </div>
            </div>
          </section>

          <section className="panel" style={{ marginTop: 15 }}>
            <div className="panel-heading"><div><span className="overline">DIRECT ACCESS</span><h2>Live apps</h2></div><button className="text-button" onClick={() => { setQuery(""); go("Hub Directory"); }}>Directory <ChevronRight size={13} /></button></div>
            <div className="tool-grid">
              {hubs.filter(h => h.status === "Live").map(h => <HubButton key={h.name} hub={h} />)}
            </div>
          </section>
        </>}

        {active === "Hub Directory" && <>
          <section className="welcome-row"><div><span className="overline">SYSTEM OF RECORD</span><h1>Hub Directory</h1><p>Grouped by readiness. Search filters this list immediately.</p></div></section>
          <div style={{ display: "grid", gap: 15 }}>
            {hubGroups.map(group => <section className="panel" key={group.status}>
              <div className="panel-heading"><div><span className="overline">{group.status.toUpperCase()}</span><h2>{group.status}</h2></div><strong style={{ fontSize: 12, color: "#8c94a5" }}>{group.items.length}</strong></div>
              <div className="tool-grid">{group.items.map(h => <HubButton key={h.name} hub={h} detailed />)}</div>
            </section>)}
            {hubGroups.length === 0 && <div className="panel empty-state"><Search size={20} /><strong>No matching hubs</strong><span>Clear or change the search.</span></div>}
          </div>
        </>}

        {active === "Action Center" && <>
          <section className="welcome-row"><div><span className="overline">EXECUTION</span><h1>Action Center</h1><p>Only real follow-ups, decisions and work to complete.</p></div><button className="capture-button" onClick={() => setCapture(true)}><Plus size={15} /> Add action</button></section>
          <section className="panel">
            <div className="panel-heading"><div><span className="overline">OPEN</span><h2>{filteredTasks.filter(t => !t.complete).length} open actions</h2></div></div>
            {filteredTasks.filter(t => !t.complete).map(task => <TaskRow key={task.id} task={task} update={patch => updateTask(task.id, patch)} remove={() => removeTask(task.id)} />)}
            {filteredTasks.filter(t => !t.complete).length === 0 && <div className="empty-state"><CheckCircle2 size={20} /><strong>No open actions</strong></div>}
          </section>
          {filteredTasks.some(t => t.complete) && <section className="panel" style={{ marginTop: 15 }}>
            <div className="panel-heading"><div><span className="overline">COMPLETED</span><h2>Completed actions</h2></div></div>
            {filteredTasks.filter(t => t.complete).map(task => <TaskRow key={task.id} task={task} update={patch => updateTask(task.id, patch)} remove={() => removeTask(task.id)} />)}
          </section>}
        </>}
      </main>
    </div>

    {capture && <Capture onClose={() => setCapture(false)} onAdd={addTask} />}
    {toast && <div className="toast" role="status">{toast}</div>}
  </div>;
}

function CompactMetric({ label, value, warning = false, onClick }: { label: string; value: number; warning?: boolean; onClick: () => void }) {
  return <button className={`metric-card ${warning ? "amber" : "violet"}`} onClick={onClick} style={{ textAlign: "left", cursor: "pointer", color: "inherit", width: "100%" }}>
    <strong>{value}</strong><h3>{label}</h3><p>Open</p>
  </button>;
}

function HubButton({ hub, detailed = false }: { hub: HubItem; detailed?: boolean }) {
  const canOpen = Boolean(hub.url);
  return <button className="tool-button" disabled={!canOpen} onClick={() => hub.url && window.open(hub.url, "_blank", "noopener")} style={{ height: detailed ? 72 : 54, opacity: canOpen ? 1 : .72 }}>
    <span>{hub.icon}</span>
    <span style={{ minWidth: 0, flex: 1, textAlign: "left", display: "flex", flexDirection: "column", gap: 3 }}>
      <strong>{hub.name}</strong>
      <small style={{ color: "#6d7687", fontSize: 9, whiteSpace: detailed ? "normal" : "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{detailed ? `${hub.area} · ${hub.purpose}` : hub.area}</small>
    </span>
    {canOpen ? <ExternalLink size={13} /> : <AlertTriangle size={13} />}
  </button>;
}

function TaskRow({ task, update, remove }: { task: HubTask; update: (patch: Partial<HubTask>) => void; remove: () => void }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const save = () => {
    const clean = title.trim();
    if (!clean) return;
    update({ title: clean });
    setEditing(false);
  };
  return <div className={`task-row ${task.complete ? "complete" : ""}`}>
    <input type="checkbox" checked={task.complete} onChange={e => update({ complete: e.target.checked })} aria-label={`Complete ${task.title}`} />
    <button className="starred" onClick={() => update({ important: !task.important })} title="Toggle important" style={{ border: 0, background: "none", opacity: task.important ? 1 : .3 }}>{task.important ? "★" : "☆"}</button>
    <div className="task-copy">
      {editing ? <input autoFocus value={title} onChange={e => setTitle(e.target.value)} onKeyDown={e => { if (e.key === "Enter") save(); if (e.key === "Escape") setEditing(false); }} /> : <button className="task-title" onClick={() => setEditing(true)}>{task.title}</button>}
    </div>
    <div style={{ display: "flex", gap: 6 }}>
      {editing && <button className="text-button" onClick={save}>Save</button>}
      <button className="text-button" onClick={remove}>Delete</button>
    </div>
  </div>;
}

function Capture({ onClose, onAdd }: { onClose: () => void; onAdd: (title: string, lane: TaskLane, important: boolean) => void }) {
  const [title, setTitle] = useState("");
  const [important, setImportant] = useState(false);
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const clean = title.trim();
    if (clean) onAdd(clean, "D", important);
  };
  return <div className="modal-backdrop" onMouseDown={e => { if (e.currentTarget === e.target) onClose(); }}>
    <div className="modal">
      <div className="modal-heading"><div><span className="overline">ACTION CENTER</span><h2>Add action</h2></div><IconButton label="Close" onClick={onClose}><X size={16} /></IconButton></div>
      <form onSubmit={submit}>
        <label htmlFor="action-title">Action</label>
        <input id="action-title" autoFocus value={title} onChange={e => setTitle(e.target.value)} placeholder="What needs to be done?" />
        <label className="important-check" style={{ marginTop: 15 }}><input type="checkbox" checked={important} onChange={e => setImportant(e.target.checked)} /> Important</label>
        <div className="modal-actions"><button type="button" className="secondary-button" onClick={onClose}>Cancel</button><button type="submit" className="primary-button">Add action</button></div>
      </form>
    </div>
  </div>;
}
