import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import MainHeadStatus from "./main-head-status";

type ControlRecord = {
  file: string;
  id: string;
  title: string;
  group: "core" | "evidence" | "supporting";
};

function controlRoot() {
  const roots = [
    path.resolve(process.cwd(), "..", "PROJECT CONTROL SYSTEM"),
    path.resolve(process.cwd(), "PROJECT CONTROL SYSTEM"),
  ];
  return roots.find((root) => {
    try {
      return fs.existsSync(root);
    } catch {
      return false;
    }
  });
}

function readControlFile(name: string) {
  const root = controlRoot();
  if (!root) return "";
  try {
    return fs.readFileSync(path.join(root, name), "utf8");
  } catch {
    return "";
  }
}

function discoverControlRecords(): ControlRecord[] {
  const root = controlRoot();
  if (!root) return [];

  try {
    return fs
      .readdirSync(root)
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const source = fs.readFileSync(path.join(root, file), "utf8");
        const heading = source.match(/^#\s+(.+)$/m)?.[1]?.trim();
        const numericPrefix = file.match(/^(\d{2})/)?.[1] ?? "--";
        const numericValue = Number(numericPrefix);
        const title =
          heading?.replace(/^\d+\s*[—-]\s*/, "") ??
          file.replace(/\.md$/i, "").replace(/^\d+_?/, "").replaceAll("_", " ");

        let group: ControlRecord["group"] = "evidence";
        if (numericPrefix === "00") group = "supporting";
        else if (numericValue >= 1 && numericValue <= 22) group = "core";

        return { file, id: numericPrefix, title, group };
      })
      .sort((a, b) => a.file.localeCompare(b.file, undefined, { numeric: true }));
  } catch {
    return [];
  }
}

function field(source: string, label: string, fallback = "UNKNOWN") {
  const safe = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = source.match(new RegExp(`^${safe}:\\s*(.+)$`, "mi"));
  return match?.[1]?.trim() || fallback;
}

function rowStatus(source: string, id: string, statusIndex: number) {
  const row = source.split(/\r?\n/).find((line) => line.trim().startsWith(`| ${id} |`));
  if (!row) return "UNKNOWN";
  const cells = row.split("|").map((cell) => cell.trim()).filter(Boolean);
  return cells[statusIndex] || "UNKNOWN";
}

function queueCount(source: string) {
  return source.split(/\r?\n/).filter((line) => /^\|\s*QUEUE-\d+\s*\|/.test(line)).length;
}

function RecordList({ title, records }: { title: string; records: ControlRecord[] }) {
  if (!records.length) return null;

  return (
    <section style={{ padding: 16, border: "1px solid #283142", borderRadius: 12, background: "#10151f", display: "grid", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <strong style={{ fontSize: 13 }}>{title}</strong>
        <span style={{ fontSize: 11, color: "#7d8596" }}>{records.length} records</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 8 }}>
        {records.map((record) => (
          <div key={record.file} style={{ border: "1px solid #283142", borderRadius: 9, padding: 10, background: "#0c111a", display: "grid", gridTemplateColumns: "38px 1fr", gap: 9, alignItems: "start" }}>
            <span style={{ fontSize: 11, color: "#8c94a5", fontWeight: 800 }}>{record.id}</span>
            <div style={{ minWidth: 0 }}>
              <strong style={{ display: "block", fontSize: 12, lineHeight: 1.35 }}>{record.title}</strong>
              <span style={{ display: "block", marginTop: 3, color: "#7d8596", fontSize: 10, lineHeight: 1.35, overflowWrap: "anywhere" }}>{record.file}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProjectControlPage() {
  const current = readControlFile("06_CURRENT_STATE.md");
  const queue = readControlFile("22_PROJECT_OPERATIONS_QUEUE.md");
  const defects = readControlFile("11_DEFECT_REGISTER.md");
  const records = discoverControlRecords();

  const productionCommit = field(current, "CURRENT_PRODUCTION_COMMIT");
  const lastVerifiedDeployment = field(current, "CURRENT_DEPLOYMENT");
  const buildStatus = field(current, "BUILD_STATUS");
  const securityStatus = field(current, "SECURITY_STATUS");
  const scopeStatus = field(current, "SCOPE_ISOLATION_STATUS");
  const snapshotDate = field(current, "DATE");
  const repairStatus = rowStatus(defects, "DEF-010", 3);
  const scopeQueue = rowStatus(queue, "QUEUE-010", 4);
  const repairQueue = rowStatus(queue, "QUEUE-002", 4);
  const tracked = queueCount(queue);
  const servedRevision = process.env.VERCEL_GIT_COMMIT_SHA || productionCommit;
  const servedEnvironment = process.env.VERCEL_ENV || "local/unknown";

  const core = records.filter((record) => record.group === "core");
  const evidence = records.filter((record) => record.group === "evidence");
  const supporting = records.filter((record) => record.group === "supporting");

  return (
    <main style={{ minHeight: "100vh", background: "#080b12", color: "#f4f4f7", fontFamily: "Arial,sans-serif", padding: 24 }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gap: 18 }}>
        <header>
          <div style={{ fontSize: 11, letterSpacing: ".14em", color: "#7d8596", fontWeight: 800 }}>MASTER HUB · PROJECT OPERATIONS</div>
          <h1 style={{ margin: "7px 0", fontSize: 30 }}>Project Control Center</h1>
          <p style={{ margin: 0, color: "#8c94a5", maxWidth: 900, lineHeight: 1.55 }}>
            Canonical records are discovered directly from the Project Control System at build time. Current GitHub main is checked live in the browser so source, served build, and last verified production evidence are not presented as the same thing when they differ.
          </p>
        </header>

        <section style={{ padding: 16, border: "1px solid #283142", borderRadius: 12, background: "#10151f", display: "grid", gap: 8 }}>
          <strong style={{ fontSize: 13 }}>Operating rule</strong>
          <span style={{ fontSize: 12, color: "#aeb5c3", lineHeight: 1.55 }}>Evidence over assumption · Reality over intended state · Approval over silent change · Verification over generated output · Traceability over memory.</span>
        </section>

        <MainHeadStatus servedRevision={servedRevision} lastVerifiedProductionCommit={productionCommit} />

        <section style={{ padding: 16, border: "1px solid #283142", borderRadius: 12, background: "#10151f", display: "grid", gap: 12 }}>
          <div>
            <strong style={{ fontSize: 13 }}>Operations truth snapshot</strong>
            <p style={{ margin: "8px 0 0", fontSize: 12, color: "#8c94a5", lineHeight: 1.55 }}>
              Served build revision {servedRevision} ({servedEnvironment}). Last verified production record: {lastVerifiedDeployment} @ {productionCommit}. Canonical snapshot date: {snapshotDate}. Repair Package defect: {repairStatus}. Scope-isolation queue: {scopeQueue}.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 8 }}>
            {[
              ["Queue", `${tracked} tracked items`],
              ["Control records", `${records.length} discovered`],
              ["Build", buildStatus],
              ["Repair Packages", `${repairStatus} · ${repairQueue}`],
              ["Scope Isolation", `${scopeStatus} · ${scopeQueue}`],
              ["Security", securityStatus],
            ].map(([key, value]) => (
              <div key={key} style={{ border: "1px solid #283142", borderRadius: 9, padding: 11, background: "#0c111a" }}>
                <span style={{ display: "block", fontSize: 10, color: "#7d8596", letterSpacing: ".08em", fontWeight: 800 }}>{key.toUpperCase()}</span>
                <strong style={{ display: "block", marginTop: 5, fontSize: 13 }}>{value}</strong>
              </div>
            ))}
          </div>
        </section>

        <RecordList title="Core control records" records={core} />
        <RecordList title="Evidence & checkpoints" records={evidence} />
        <RecordList title="Supporting evidence & plans" records={supporting} />

        <Link href="/" style={{ color: "#a99eff", textDecoration: "none", fontWeight: 700 }}>← Master Hub</Link>
      </div>
    </main>
  );
}
