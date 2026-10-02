"use client";

import Link from "next/link";
import { useState } from "react";

export default function ScopeTemplatesPage() {
  const [status, setStatus] = useState("Opening Scope Templates…");

  const openScopeTab = (frame: HTMLIFrameElement) => {
    try {
      const doc = frame.contentDocument;
      if (!doc) return;
      const controls = Array.from(doc.querySelectorAll<HTMLElement>("button,[role='tab'],a"));
      const target = controls.find((el) => el.textContent?.trim() === "Scope Templates");
      if (target) {
        target.click();
        setStatus("Scope Templates");
      } else {
        setStatus("BW Dashboard loaded — choose Scope Templates");
      }
    } catch {
      setStatus("BW Dashboard loaded");
    }
  };

  return (
    <main style={{ minHeight: "100vh", background: "#080b12", color: "#f4f4f7", display: "grid", gridTemplateRows: "auto 1fr" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "12px 16px", borderBottom: "1px solid #283142", background: "#0f141d" }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: ".12em", color: "#7d8596", fontWeight: 800 }}>MASTER HUB · BILLED WORK</div>
          <strong style={{ fontSize: 18 }}>Scope Templates</strong>
          <div style={{ fontSize: 12, color: "#8c94a5", marginTop: 2 }}>{status}</div>
        </div>
        <Link href="/" style={{ color: "#a99eff", textDecoration: "none", fontWeight: 800, whiteSpace: "nowrap" }}>← Master Hub</Link>
      </header>
      <iframe
        title="Master Hub Scope Templates"
        src="/bw-dashboard.html"
        onLoad={(event) => openScopeTab(event.currentTarget)}
        style={{ display: "block", width: "100%", height: "100%", minHeight: "calc(100vh - 72px)", border: 0, background: "#0a0f14" }}
      />
    </main>
  );
}
