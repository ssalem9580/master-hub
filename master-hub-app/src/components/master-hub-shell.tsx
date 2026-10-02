import Link from "next/link";
import { MasterHub } from "@/components/master-hub";

export function MasterHubShell() {
  return (
    <>
      <MasterHub />
      <Link
        href="/scope-templates"
        aria-label="Open Scope Templates"
        title="Open Scope Templates"
        style={{
          position: "fixed",
          right: 18,
          bottom: 18,
          zIndex: 90,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "11px 14px",
          border: "1px solid #4d466d",
          borderRadius: 12,
          background: "#171326",
          color: "#e8e2ff",
          boxShadow: "0 10px 30px rgba(0,0,0,.35)",
          textDecoration: "none",
          fontSize: 13,
          fontWeight: 800,
        }}
      >
        <span aria-hidden="true">▦</span>
        Scope Templates
      </Link>
    </>
  );
}
