"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Profile={income:string;housingCap:string;creditScore:string;targetScore:string;savingsFloor:string;savingsTarget:string;dog:boolean};
const EMPTY:Profile={income:"",housingCap:"",creditScore:"",targetScore:"",savingsFloor:"",savingsTarget:"",dog:true};
const KEY="master-hub:finance-profile:v1";

const box:React.CSSProperties={border:"1px solid #283142",borderRadius:12,background:"#10151f",padding:16};
const input:React.CSSProperties={width:"100%",background:"#0b0f16",border:"1px solid #30394a",borderRadius:8,padding:"10px 11px",color:"#f4f4f7",fontSize:14};

export default function FinancesCommandCenter(){
  const [p,setP]=useState<Profile>(EMPTY),[saved,setSaved]=useState(false);
  useEffect(()=>{try{const raw=localStorage.getItem(KEY);if(raw)setP({...EMPTY,...JSON.parse(raw)})}catch{}},[]);
  const n=(v:string)=>Number(v.replace(/[^0-9.]/g,""))||0;
  const monthlyGross=useMemo(()=>n(p.income)/12,[p.income]);
  const cap=n(p.housingCap),score=n(p.creditScore),target=n(p.targetScore)||640;
  const save=()=>{localStorage.setItem(KEY,JSON.stringify(p));setSaved(true);setTimeout(()=>setSaved(false),1500)};
  const set=(k:keyof Profile,v:string|boolean)=>setP(x=>({...x,[k]:v}));
  const scoreGap=Math.max(0,target-score);
  const housingHealthy=cap>0&&monthlyGross>0&&cap<=1200;

  return <main style={{minHeight:"100vh",background:"#080b12",color:"#f4f4f7",fontFamily:"Arial,sans-serif",padding:24}}>
    <div style={{maxWidth:1160,margin:"0 auto",display:"grid",gap:16}}>
      <header style={{display:"flex",justifyContent:"space-between",gap:16,alignItems:"end",flexWrap:"wrap"}}>
        <div><div style={{fontSize:11,letterSpacing:".14em",color:"#7d8596",fontWeight:800}}>MASTER HUB · FINANCIAL</div><h1 style={{margin:"7px 0",fontSize:30}}>Finances Command Center</h1><p style={{margin:0,color:"#8c94a5"}}>12-month rental stability + credit rebuild toward homeownership.</p></div>
        <button onClick={save} style={{border:0,borderRadius:8,padding:"10px 14px",fontWeight:800,cursor:"pointer"}}>{saved?"Saved":"Save profile locally"}</button>
      </header>

      <section style={{...box,borderColor:"#594d28"}}><strong style={{fontSize:13}}>Privacy</strong><p style={{margin:"7px 0 0",fontSize:12,color:"#aab1bf",lineHeight:1.5}}>Your personal numbers are stored only in this browser via localStorage. They are not hard-coded into the public repository.</p></section>

      <section style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))",gap:10}}>
        <Field label="Annual gross income" value={p.income} onChange={v=>set("income",v)} placeholder="$52,000"/>
        <Field label="Housing cap / month" value={p.housingCap} onChange={v=>set("housingCap",v)} placeholder="$1,200"/>
        <Field label="Current credit score" value={p.creditScore} onChange={v=>set("creditScore",v)} placeholder="540"/>
        <Field label="Target credit score" value={p.targetScore} onChange={v=>set("targetScore",v)} placeholder="640"/>
        <Field label="Minimum liquid reserve" value={p.savingsFloor} onChange={v=>set("savingsFloor",v)} placeholder="$1,000"/>
        <Field label="Preferred reserve" value={p.savingsTarget} onChange={v=>set("savingsTarget",v)} placeholder="$2,000"/>
      </section>

      <section style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",gap:10}}>
        <Metric label="Monthly gross" value={monthlyGross?money(monthlyGross):"—"}/>
        <Metric label="Housing ceiling" value={cap?money(cap):"—"} note={housingHealthy?"Within hard cap":"Hard cap: $1,200"}/>
        <Metric label="Credit gap" value={score?`${scoreGap} points`:"—"} note={score>=target?"Target reached":"Priority: rebuild"}/>
        <Metric label="Pet requirement" value={p.dog?"Required":"No"} note="Count pet rent and fees in housing cost"/>
      </section>

      <section style={box}><h2 style={{margin:"0 0 12px",fontSize:18}}>Status Check</h2><p style={{margin:0,color:"#aab1bf",lineHeight:1.6}}>{score?`Current score ${score}. ${score>=target?"Credit target reached; verify current program eligibility before applying.":`${scoreGap} points remain to the ${target}+ planning target.`}`:"Enter your current score to activate the credit-gap tracker."} {cap?`Housing is capped at ${money(cap)} per month.`:"Enter the monthly housing cap."}</p></section>

      <section style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:10}}>
        <Panel title="Immediate Next Steps" items={["Prevent every new late payment: automate at least minimum payments before due dates.","List every revolving balance, credit limit, minimum payment, collection, charge-off and recent late mark before choosing payoff order."]}/>
        <Panel title="Hidden Costs Alert" items={["Reject housing when required rent + pet rent + mandatory fees exceeds the housing ceiling.","Track utilities, parking, renters insurance, application/admin charges and pet deposits separately from advertised rent."]}/>
        <Panel title="Roadmap Alignment" items={["Stop new damage → lower revolving utilization → resolve actionable derogatories → establish perfect payment history.","Preserve the liquid reserve → reach the credit target → verify current Illinois assistance rules → evaluate homeownership."]}/>
      </section>

      <section style={box}><h2 style={{margin:"0 0 10px",fontSize:18}}>12-Month Execution Plan</h2><div style={{display:"grid",gap:8}}>{[
        ["Months 1–2","Baseline","Pull all three credit reports, verify balances/limits/statuses, stop new lates, set autopay minimums, dispute only factual inaccuracies."],
        ["Months 3–5","Utilization","Direct surplus toward revolving balances, prioritizing utilization thresholds while keeping the cash floor intact."],
        ["Months 6–8","Derogatories","Handle validated collections/charge-offs strategically; get settlement terms in writing and avoid draining the emergency reserve."],
        ["Months 9–10","Stability","Maintain zero new negatives, low utilization, and no unnecessary hard inquiries or new accounts."],
        ["Months 11–12","Mortgage readiness","Recheck scores/reports, document income/assets, verify current IHDA and lender requirements, and only shop inside the housing cap."],
      ].map(([m,t,d])=><div key={m} style={{display:"grid",gridTemplateColumns:"110px 130px 1fr",gap:12,padding:"10px 0",borderBottom:"1px solid #222a38",fontSize:13}}><strong>{m}</strong><span>{t}</span><span style={{color:"#aab1bf"}}>{d}</span></div>)}</div></section>

      <Link href="/" style={{color:"#a99eff",textDecoration:"none",fontWeight:700}}>← Master Hub</Link>
    </div>
  </main>
}

function Field({label,value,onChange,placeholder}:{label:string;value:string;onChange:(v:string)=>void;placeholder:string}){return <label style={{...box,display:"grid",gap:7,fontSize:12,color:"#aab1bf"}}><strong style={{color:"#f4f4f7"}}>{label}</strong><input value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} inputMode="decimal" style={input}/></label>}
function Metric({label,value,note}:{label:string;value:string;note?:string}){return <div style={box}><div style={{fontSize:11,color:"#7d8596",fontWeight:800,textTransform:"uppercase",letterSpacing:".08em"}}>{label}</div><div style={{fontSize:24,fontWeight:800,marginTop:6}}>{value}</div>{note&&<div style={{fontSize:11,color:"#9ca4b3",marginTop:5}}>{note}</div>}</div>}
function Panel({title,items}:{title:string;items:string[]}){return <section style={box}><h2 style={{fontSize:16,margin:"0 0 10px"}}>{title}</h2><ul style={{margin:0,paddingLeft:18,color:"#aab1bf",fontSize:13,lineHeight:1.6}}>{items.map(i=><li key={i}>{i}</li>)}</ul></section>}
function money(v:number){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(v)}
