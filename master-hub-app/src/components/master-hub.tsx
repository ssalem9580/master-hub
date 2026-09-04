"use client";

import { Activity, AlertTriangle, Calculator, CheckCircle2, ChevronDown, ChevronRight, CircleDollarSign, Command, ExternalLink, FolderKanban, LayoutDashboard, Menu, Plus, Search, Target, X } from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { defaultHubState, HubState, HubTask, loadHubState, saveHubState, TaskLane } from "@/lib/hub-data";

type HubStatus = "Setup needed" | "Live" | "Development" | "Offline" | "Archived";
type HubItem = { name:string; url?:string; internal?:boolean; status:HubStatus; area:string; purpose:string; icon:React.ReactNode };

const statusOrder:HubStatus[]=["Setup needed","Live","Development","Offline","Archived"];
const hubs:HubItem[]=[
  {name:"Field Diagnostic Hub",url:"/field-resource-hub",internal:true,status:"Setup needed",area:"Work · Field Service",purpose:"Diagnostics, VAT audio guidance, repair packages and field troubleshooting.",icon:<Activity size={17}/>},
  {name:"Finances Command Center",status:"Setup needed",area:"Financial",purpose:"Cash flow, accounts, bills, debt, goals and investments.",icon:<CircleDollarSign size={17}/>},
  {name:"NTE Exceed/Quote Generator",url:"https://job-quote-calculator-tau.vercel.app",status:"Live",area:"Work · Quoting",purpose:"Create quotes and official NTE exceed forms.",icon:<Calculator size={17}/>},
  {name:"Billed Work Tracker",url:"https://billed-work-tracker-live.vercel.app",status:"Live",area:"Work · Billing",purpose:"Track billed work, payment status and reconciliation.",icon:<FolderKanban size={17}/>},
  {name:"Recovery Value Calculator",url:"https://recovery-value-calculator.vercel.app",status:"Live",area:"Business · Recovery",purpose:"Calculate recovery values and deal economics.",icon:<CircleDollarSign size={17}/>},
  {name:"Private Client",url:"https://privateclient.samsalem0319.chatgpt.site/",status:"Live",area:"Personal",purpose:"Private-client workspace.",icon:<FolderKanban size={17}/>},
  {name:"Illinois Locksmith Exam Prep",url:"https://illinois-locksmith-exam-tutor.samsalem0319.chatgpt.site/",status:"Live",area:"Knowledge · Exam Prep",purpose:"Illinois locksmith licensing exam study and practice.",icon:<Target size={17}/>},
  {name:"Sam Hub",url:"https://sam-hub-six.vercel.app",status:"Live",area:"Admin · Registry",purpose:"Legacy app registry and management workspace.",icon:<LayoutDashboard size={17}/>},
];

function IconButton({label,children,onClick,className=""}:{label:string;children:React.ReactNode;onClick?:()=>void;className?:string}){return <button className={`icon-button ${className}`} aria-label={label} title={label} onClick={onClick}>{children}</button>}

export function MasterHub(){
  const [state,setState]=useState<HubState>(defaultHubState);
  const [ready,setReady]=useState(false),[menu,setMenu]=useState(false),[capture,setCapture]=useState(false),[setupFolderOpen,setSetupFolderOpen]=useState(true);
  const [query,setQuery]=useState(""),[active,setActive]=useState<"Dashboard"|"Hub Directory"|"Action Center">("Dashboard"),[toast,setToast]=useState("");
  const searchRef=useRef<HTMLInputElement>(null);

  useEffect(()=>{const id=window.setTimeout(()=>{setState(loadHubState(window.localStorage));setReady(true)},0);return()=>window.clearTimeout(id)},[]);
  useEffect(()=>{if(ready)saveHubState(state,window.localStorage)},[ready,state]);
  useEffect(()=>{const fn=(e:KeyboardEvent)=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();searchRef.current?.focus()}if(e.key==="Escape"){setCapture(false);setMenu(false)}};window.addEventListener("keydown",fn);return()=>window.removeEventListener("keydown",fn)},[]);

  const normalizedQuery=query.trim().toLowerCase();
  const filteredHubs=useMemo(()=>hubs.filter(h=>!normalizedQuery||`${h.name} ${h.area} ${h.status} ${h.purpose}`.toLowerCase().includes(normalizedQuery)),[normalizedQuery]);
  const filteredTasks=useMemo(()=>state.tasks.filter(t=>t.title.toLowerCase().includes(normalizedQuery)),[state.tasks,normalizedQuery]);
  const openTasks=state.tasks.filter(t=>!t.complete),importantTasks=openTasks.filter(t=>t.important),setupHubs=hubs.filter(h=>h.status==="Setup needed"),liveHubs=hubs.filter(h=>h.status==="Live");
  const liveCount=liveHubs.length,setupCount=setupHubs.length;
  const hubGroups=statusOrder.map(status=>({status,items:filteredHubs.filter(h=>h.status===status)})).filter(g=>g.items.length);

  const notify=(m:string)=>{setToast(m);window.setTimeout(()=>setToast(""),1800)};
  const go=(view:"Dashboard"|"Hub Directory"|"Action Center")=>{setActive(view);setMenu(false)};
  const openHub=(hub:HubItem)=>{if(!hub.url){setQuery(hub.name);go("Hub Directory");return;} if(hub.internal){window.location.href=hub.url;return;} window.open(hub.url,"_blank","noopener")};
  const updateTask=(id:string,patch:Partial<HubTask>)=>setState(s=>({...s,tasks:s.tasks.map(t=>t.id===id?{...t,...patch}:t)}));
  const removeTask=(id:string)=>{if(window.confirm("Delete this action?")){setState(s=>({...s,tasks:s.tasks.filter(t=>t.id!==id)}));notify("Action deleted")}};
  const addTask=(title:string,lane:TaskLane,important:boolean)=>{setState(s=>({...s,tasks:[{id:crypto.randomUUID(),title,lane,important,complete:false,due:""},...s.tasks]}));setCapture(false);notify("Action added")};

  return <div className="app-shell">
    <button className={`scrim ${menu?"visible":""}`} aria-label="Close navigation" onClick={()=>setMenu(false)}/>
    <aside className={`sidebar ${menu?"open":""}`}>
      <div className="brand"><span className="brand-mark"><Command size={17}/></span><span>MASTER HUB</span><IconButton label="Close menu" className="mobile-close" onClick={()=>setMenu(false)}><X size={16}/></IconButton></div>
      <nav aria-label="Primary navigation">
        <div className="nav-group"><p>Command</p>
          <button className={`nav-item ${active==="Dashboard"?"active":""}`} onClick={()=>go("Dashboard")}><span className="nav-icon"><LayoutDashboard size={16}/></span><strong>Dashboard</strong></button>
          <button className={`nav-item ${active==="Hub Directory"?"active":""}`} onClick={()=>go("Hub Directory")}><span className="nav-icon"><FolderKanban size={16}/></span><strong>Directory</strong></button>
          <button className={`nav-item ${active==="Action Center"?"active":""}`} onClick={()=>go("Action Center")}><span className="nav-icon"><Target size={16}/></span><strong>Actions</strong>{openTasks.length>0&&<em>{openTasks.length}</em>}</button>
        </div>
        <div className="nav-group"><p>Life Areas</p>
          <button className="nav-item" onClick={()=>setSetupFolderOpen(x=>!x)} aria-expanded={setupFolderOpen}><span className="nav-icon"><FolderKanban size={16}/></span><strong>Setup needed</strong>{setupCount>0&&<em>{setupCount}</em>}<ChevronDown size={14} className={setupFolderOpen?"chevron open":"chevron"}/></button>
          {setupFolderOpen&&<div className="setup-list">{setupHubs.map(h=><button key={h.name} className="setup-item" onClick={()=>openHub(h)}><span className="setup-icon">{h.icon}</span><span>{h.name}</span><AlertTriangle size={12}/></button>)}</div>}
        </div>
      </nav>
    </aside>

    <div className="main-wrap">
      <header className="topbar"><IconButton label="Open menu" className="menu-button" onClick={()=>setMenu(true)}><Menu size={20}/></IconButton><div className="search-wrap"><Search size={16}/><input ref={searchRef} value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search apps or actions"/><kbd>⌘K</kbd></div><button className="capture-button" onClick={()=>setCapture(true)}><Plus size={15}/> Add action</button></header>
      <main>
        {active==="Dashboard"&&<>
          <section className="page-head"><div><span className="overline">COMMAND CENTER</span><h1>Master Hub</h1><p>Everything important, one screen.</p></div><div className="health-strip"><span><i className="live-dot"/>{liveCount} live</span><span className={setupCount?"warn":""}>{setupCount} setup</span><span>{openTasks.length} actions</span></div></section>

          {setupCount>0&&<section className="attention-band"><div><AlertTriangle size={18}/><div><strong>Setup needed</strong><span>{setupCount} item{setupCount===1?"":"s"} require attention</span></div></div><button onClick={()=>{setQuery("Setup needed");go("Hub Directory")}}>Review <ChevronRight size={14}/></button></section>}

          <section className="section-block"><div className="section-head"><div><span className="overline">DIRECT ACCESS</span><h2>Live apps</h2></div><button className="text-button" onClick={()=>{setQuery("");go("Hub Directory")}}>All apps <ChevronRight size={13}/></button></div><div className="app-grid">{liveHubs.map(h=><HubCard key={h.name} hub={h} onOpen={()=>openHub(h)}/>)}</div></section>

          <section className="dash-grid"><div className="section-block"><div className="section-head"><div><span className="overline">ACTIONS</span><h2>Open actions</h2></div><button className="text-button" onClick={()=>setCapture(true)}>Add</button></div><div className="task-list">{openTasks.slice(0,6).map(t=><TaskRow key={t.id} task={t} update={p=>updateTask(t.id,p)} remove={()=>removeTask(t.id)}/>)}{openTasks.length===0&&<Empty label="No open actions"/>}</div></div>
          <div className="section-block"><div className="section-head"><div><span className="overline">SETUP NEEDED</span><h2>Needs attention</h2></div></div><div className="setup-cards">{setupHubs.map(h=><HubCard key={h.name} hub={h} compact onOpen={()=>openHub(h)}/>)}{setupHubs.length===0&&<Empty label="Everything is ready"/>}</div></div></section>
        </>}

        {active==="Hub Directory"&&<><section className="page-head"><div><span className="overline">SYSTEM OF RECORD</span><h1>Hub Directory</h1><p>Every app, grouped by readiness.</p></div></section><div className="directory-stack">{hubGroups.map(g=><section className="section-block" key={g.status}><div className="section-head"><div><span className="overline">{g.status.toUpperCase()}</span><h2>{g.status}</h2></div><strong className="count-badge">{g.items.length}</strong></div><div className="app-grid">{g.items.map(h=><HubCard key={h.name} hub={h} onOpen={()=>openHub(h)}/>)}</div></section>)}{hubGroups.length===0&&<Empty label="No matching apps"/>}</div></>}

        {active==="Action Center"&&<><section className="page-head"><div><span className="overline">EXECUTION</span><h1>Action Center</h1><p>Only work that needs a decision or completion.</p></div><button className="capture-button" onClick={()=>setCapture(true)}><Plus size={15}/> Add action</button></section><section className="section-block"><div className="section-head"><div><span className="overline">OPEN</span><h2>{filteredTasks.filter(t=>!t.complete).length} open actions</h2></div></div><div className="task-list">{filteredTasks.filter(t=>!t.complete).map(t=><TaskRow key={t.id} task={t} update={p=>updateTask(t.id,p)} remove={()=>removeTask(t.id)}/>)}{filteredTasks.filter(t=>!t.complete).length===0&&<Empty label="No open actions"/>}</div></section>{filteredTasks.some(t=>t.complete)&&<section className="section-block secondary-section"><div className="section-head"><div><span className="overline">COMPLETED</span><h2>Completed</h2></div></div><div className="task-list">{filteredTasks.filter(t=>t.complete).map(t=><TaskRow key={t.id} task={t} update={p=>updateTask(t.id,p)} remove={()=>removeTask(t.id)}/>)}</div></section>}</>}
      </main>
    </div>
    {capture&&<Capture onClose={()=>setCapture(false)} onAdd={addTask}/>} {toast&&<div className="toast" role="status">{toast}</div>}
  </div>
}

function HubCard({hub,compact=false,onOpen}:{hub:HubItem;compact?:boolean;onOpen:()=>void}){return <button className={`hub-card ${compact?"compact":""}`} onClick={onOpen}><span className="hub-icon">{hub.icon}</span><span className="hub-copy"><strong>{hub.name}</strong><small>{hub.area}</small>{!compact&&<p>{hub.purpose}</p>}</span><span className={`status-pill ${hub.status==="Live"?"live":"setup"}`}>{hub.status}</span>{hub.url?(hub.internal?<ChevronRight size={14}/>:<ExternalLink size={14}/>):<AlertTriangle size={14}/>}</button>}
function Empty({label}:{label:string}){return <div className="empty-state"><CheckCircle2 size={18}/><strong>{label}</strong></div>}
function TaskRow({task,update,remove}:{task:HubTask;update:(p:Partial<HubTask>)=>void;remove:()=>void}){const [editing,setEditing]=useState(false),[title,setTitle]=useState(task.title);const save=()=>{const v=title.trim();if(v){update({title:v});setEditing(false)}};return <div className={`task-row ${task.complete?"complete":""}`}><input type="checkbox" checked={task.complete} onChange={e=>update({complete:e.target.checked})}/><button className="starred" onClick={()=>update({important:!task.important})}>{task.important?"★":"☆"}</button><div className="task-copy">{editing?<input autoFocus value={title} onChange={e=>setTitle(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")save();if(e.key==="Escape")setEditing(false)}}/>:<button className="task-title" onClick={()=>setEditing(true)}>{task.title}</button>}</div><div className="row-actions">{editing&&<button onClick={save}>Save</button>}<button onClick={remove}>Delete</button></div></div>}
function Capture({onClose,onAdd}:{onClose:()=>void;onAdd:(title:string,lane:TaskLane,important:boolean)=>void}){const [title,setTitle]=useState(""),[important,setImportant]=useState(false);const submit=(e:FormEvent)=>{e.preventDefault();const v=title.trim();if(v)onAdd(v,"D",important)};return <div className="modal-backdrop" onMouseDown={e=>{if(e.currentTarget===e.target)onClose()}}><div className="modal"><div className="modal-heading"><div><span className="overline">ACTION CENTER</span><h2>Add action</h2></div><IconButton label="Close" onClick={onClose}><X size={16}/></IconButton></div><form onSubmit={submit}><label htmlFor="action-title">Action</label><input id="action-title" autoFocus value={title} onChange={e=>setTitle(e.target.value)} placeholder="What needs to be done?"/><label className="important-check"><input type="checkbox" checked={important} onChange={e=>setImportant(e.target.checked)}/> Important</label><div className="modal-actions"><button type="button" className="secondary-button" onClick={onClose}>Cancel</button><button type="submit" className="primary-button">Add action</button></div></form></div></div>}
