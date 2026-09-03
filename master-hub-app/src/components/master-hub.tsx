"use client";
import { Activity, AlertTriangle, Bell, BriefcaseBusiness, Calculator, ChevronDown, ChevronRight, CircleDollarSign, Command, Folder, HeartHandshake, LayoutDashboard, Lightbulb, Menu, Plus, Search, Settings, Target, UserRound, Stethoscope, X } from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { defaultHubState, HubState, HubTask, loadHubState, saveHubState, TaskLane } from "@/lib/hub-data";

const groups = [
 { label: "Command", items: [["Dashboard", LayoutDashboard], ["Action Center", Target], ["Alerts", AlertTriangle]] },
 { label: "Life areas", items: [["Work", BriefcaseBusiness], ["Personal", UserRound], ["Financial", CircleDollarSign], ["Health", Stethoscope], ["Relationships", HeartHandshake], ["Knowledge", Lightbulb]] }
] as const;
const folderData = [{name:"Projects", children:["Studio refresh","Fall travel"]},{name:"Resources",children:["Reading list"]}];

type HubStatus = "Live" | "Setup needed" | "Development" | "Offline" | "Archived";
type ExternalHub = { name:string; url:string; icon:React.ReactNode; status:HubStatus; area:string };
const statusOrder:HubStatus[] = ["Setup needed", "Live", "Development", "Offline", "Archived"];

function IconButton({label,children,onClick,className=""}:{label:string;children:React.ReactNode;onClick?:()=>void;className?:string}) {
 return <button className={"icon-button "+className} aria-label={label} title={label} onClick={onClick}>{children}</button>;
}
export function MasterHub() {
 const [state,setState]=useState<HubState>(defaultHubState), [ready,setReady]=useState(false);
 const [menu,setMenu]=useState(false), [capture,setCapture]=useState(false), [notices,setNotices]=useState(false);
 const [query,setQuery]=useState(""), [active,setActive]=useState("Dashboard"), [expanded,setExpanded]=useState(["Projects"]), [toast,setToast]=useState("");
 const searchRef=useRef<HTMLInputElement>(null);
 useEffect(()=>{const id=window.setTimeout(()=>{setState(loadHubState(window.localStorage));setReady(true)},0);return()=>window.clearTimeout(id)},[]);
 useEffect(()=>{if(ready)saveHubState(state,window.localStorage)},[ready,state]);
 useEffect(()=>{const keys=(e:KeyboardEvent)=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();searchRef.current?.focus()}if(e.key==="Escape"){setCapture(false);setNotices(false)}};window.addEventListener("keydown",keys);return()=>window.removeEventListener("keydown",keys)},[]);
 const tasks=useMemo(()=>state.tasks.filter(t=>t.title.toLowerCase().includes(query.toLowerCase())),[state.tasks,query]);
 const open=state.tasks.filter(t=>!t.complete).length, important=state.tasks.filter(t=>t.important&&!t.complete).length;
 const progress=Math.round(state.tasks.filter(t=>t.complete).length/Math.max(state.tasks.length,1)*100);
 const notify=(s:string)=>{setToast(s);window.setTimeout(()=>setToast(""),2200)};
 const update=(id:string,p:Partial<HubTask>)=>setState(s=>({...s,tasks:s.tasks.map(t=>t.id===id?{...t,...p}:t)}));
 const remove=(id:string)=>{if(window.confirm("Delete this task? This cannot be undone.")){setState(s=>({...s,tasks:s.tasks.filter(t=>t.id!==id)}));notify("Task deleted")}};
 const add=(title:string,lane:TaskLane,star:boolean)=>{setState(s=>({...s,tasks:[{id:crypto.randomUUID(),title,lane,important:star,complete:false,due:"Today"},...s.tasks]}));setCapture(false);notify("Task added")};
 const choose=(name:string)=>{setActive(name);setMenu(false);notify(name+" selected")};

 const externalHubs:ExternalHub[] = [
  { name: "Field Diagnostic Hub", url: "https://field-diagnostic-hub.vercel.app", icon: <Activity/>, status: "Setup needed", area: "Work · Diagnostics" },
  { name: "Sam Hub", url: "https://sam-hub-six.vercel.app", icon: <LayoutDashboard/>, status: "Live", area: "Admin · App Registry" },
  { name: "Private Client", url: "https://privateclient.samsalem0319.chatgpt.site/", icon: <Folder/>, status: "Live", area: "Personal" },
  { name: "Billed Work Tracker", url: "https://billed-work-tracker-live.vercel.app", icon: <Calculator/>, status: "Live", area: "Work · Administrative" },
  { name: "Recovery Value Calculator", url: "https://recovery-value-calculator.vercel.app", icon: <CircleDollarSign/>, status: "Live", area: "Business · Recovery" },
  { name: "Job Quote Calculator", url: "https://job-quote-calculator-tau.vercel.app", icon: <Calculator/>, status: "Live", area: "Work · Quoting" }
 ];
 const hubGroups = statusOrder.map(status=>({status,items:externalHubs.filter(h=>h.status===status)})).filter(group=>group.items.length>0);

 return <div className="app-shell">
  <button className={"scrim "+(menu?"visible":"")} aria-label="Close navigation" onClick={()=>setMenu(false)}/>
  <aside className={"sidebar "+(menu?"open":"")}>
   <div className="brand"><span className="brand-mark"><Command size={18}/></span><span>MASTER HUB</span><IconButton label="Close menu" className="mobile-close" onClick={()=>setMenu(false)}><X size={16}/></IconButton></div>
   <nav aria-label="Primary navigation">{groups.map(g=><div className="nav-group" key={g.label}><p>{g.label}</p>{g.items.map(([name,Icon])=><button key={name} className={"nav-item "+(active===name?"active":"")} onClick={()=>choose(name)}><span className="nav-icon"><Icon size={16}/></span><strong>{name}</strong></button>)}</div>) }
    <div className="nav-group folder-group"><p>Library <button aria-label="Add folder"><Plus size={14}/></button></p>{folderData.map(f=><div key={f.name}><button className="nav-item folder" onClick={()=>{setExpanded(e=>e.includes(f.name)?e.filter(x=>x!==f.name):[...e,f.name])}}><span className="nav-icon"><Folder size={14}/></span><strong>{f.name}</strong><ChevronDown size={14}/></button>{expanded.includes(f.name)&&<div className="folder-children">{f.children.map(c=><button key={c} className="nav-subitem">{c}</button>)}</div>}</div>)}</div>
   </nav>
   <div className="sidebar-footer"><button className="profile"><span className="avatar">SS</span><span><strong>Sam Salem</strong><small>Workspace owner</small></span><Settings size={16}/></button></div>
  </aside>
  <div className="main-wrap">
   <header className="topbar"><IconButton label="Open menu" className="menu-button" onClick={()=>setMenu(true)}><Menu size={20}/></IconButton><div className="search-wrap"><Search size={17}/><input ref={searchRef} value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search"/></div><div className="top-actions"><IconButton label="Notifications" onClick={()=>setNotices(n=>!n)}><Bell size={16}/></IconButton><IconButton label="Capture" onClick={()=>setCapture(true)}><Plus size={16}/></IconButton></div></header>
   <main>
    <section className="welcome-row"><div><p className="eyebrow">WEDNESDAY · SEPTEMBER 2</p><h1>Good evening, Sam.</h1><p>Here’s the pulse of everything that matters.</p></div><div className="status"><div className="progress-ring"><div className="progress-inner">{progress}%</div></div></div></section>
    <section className="metric-grid" aria-label="Overview"><Metric label="Open actions" value={String(open)} note="2 due today" icon={<Target/>} accent="violet"/><Metric label="Important" value={String(important)} note="Assigned" icon={<HeartHandshake/>} accent="teal" progress={progress}/></section>
    <section className="content-grid">
     <div className="panel action-panel"><div className="panel-heading"><div><span className="overline">PRIORITY QUEUE</span><h2>Action Center</h2></div><button className="text-button" onClick={()=>setCapture(true)}>Add</button></div><div className="panel-body"><p>Priority tasks</p></div></div>
     <div className="side-stack"><div className="panel focus-card"><span className="overline">TODAY’S FOCUS</span><div className="focus-ring"><div><strong>{open}</strong><span>open</span></div></div></div></div>
    </section>
    <section className="lower-grid"><div className="panel projects-panel"><div className="panel-heading"><div><span className="overline">IN MOTION</span><h2>Projects</h2></div><button className="text-button">View all</button></div><div className="panel-body"><p>Projects in progress</p></div></div>

    <div className="panel links-panel">
     <div className="panel-heading"><div><span className="overline">HUB DIRECTORY</span><h2>Apps by readiness</h2></div></div>
     <div className="panel-body" style={{padding:"14px",display:"grid",gap:"14px"}}>
      {hubGroups.map(group=><section key={group.status} aria-label={group.status} style={{display:"grid",gap:"8px"}}>
       <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"10px",padding:"0 2px"}}>
        <strong style={{fontSize:"11px",letterSpacing:".08em",textTransform:"uppercase",color:group.status==="Live"?"#4ccbb2":group.status==="Setup needed"?"#dfad60":"#8c94a5"}}>{group.status}</strong>
        <span style={{fontSize:"10px",color:"#687185"}}>{group.items.length}</span>
       </div>
       <div style={{display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:"8px"}}>
        {group.items.map(h=><button key={h.name} className="tool-button" onClick={()=>window.open(h.url,'_blank','noopener')} style={{height:"auto",minHeight:"54px"}}>
         <span className="tool-icon">{h.icon}</span>
         <span style={{display:"flex",minWidth:0,flex:1,flexDirection:"column",alignItems:"flex-start",gap:"2px"}}><strong>{h.name}</strong><small style={{fontSize:"9px",color:"#687185",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"}}>{h.area}</small></span>
         <ChevronRight size={14}/>
        </button>)}
       </div>
      </section>)}
     </div>
    </div>

   </section>
   </main>
  </div>
  {capture&&<Capture onClose={()=>setCapture(false)} onAdd={add}/>}
  {toast&&<div className="toast" role="status">{toast}</div>}
 </div>;
}
function Metric({label,value,note,icon,accent,progress}:{label:string;value:string;note:string;icon:React.ReactNode;accent:string;progress?:number}){return <article className={"metric-card "+accent}><div className="metric-icon">{icon}</div><div className="metric-body"><strong>{value}</strong><small>{label}</small><p>{note}</p></div>{typeof progress!=="undefined"&&<div className="metric-progress"><div style={{width:progress+"%"}}/></div>}</article>}
function TaskRow({task,update,remove}:{task:HubTask;update:(p:Partial<HubTask>)=>void;remove:()=>void}){const [editing,setEditing]=useState(false),[title,setTitle]=useState(task.title);const save=()=>{update({title});setEditing(false)};return <div className="task-row"><input type="checkbox" checked={task.complete} onChange={e=>update({complete:e.target.checked})}/>{editing?<input value={title} onChange={e=>setTitle(e.target.value)}/>:<span className={"task-title "+(task.important?"important":"")}>{task.title}</span>}<div className="task-actions">{editing?<button onClick={save}>Save</button>:<button onClick={()=>setEditing(true)}>Edit</button>}<button onClick={remove}>Delete</button></div></div>}
function Capture({onClose,onAdd}:{onClose:()=>void;onAdd:(t:string,l:TaskLane,i:boolean)=>void}){const [title,setTitle]=useState(""),[lane,setLane]=useState<TaskLane>("D"),[star,setStar]=useState(false);const submit=(e:FormEvent)=>{e.preventDefault();if(title.trim()){onAdd(title,lane,star);setTitle("")}};return <div className="capture-modal"><form onSubmit={submit}><header><h3>New task</h3><button type="button" onClick={onClose}>Close</button></header><div className="form-row"><input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Task title"/></div><footer><button type="submit">Add</button></footer></form></div>}
function Notifications({onClose}:{onClose:()=>void}){return <div className="notification-panel"><div><strong>Notifications</strong><button onClick={onClose}>Mark all read</button></div>{[["Proposal due","You have a proposal due tomorrow"],["New comment","Jane left a comment"]].map(([t,m])=> <div key={String(t)} className="notification"><strong>{t}</strong><p>{m}</p></div>)}</div>}
function Tool({icon,name,onClick}:{icon:React.ReactNode;name:string;onClick:()=>void}){return <button className="tool-button" onClick={onClick}><span>{icon}</span><strong>{name}</strong><ChevronRight size={14}/></button>}
