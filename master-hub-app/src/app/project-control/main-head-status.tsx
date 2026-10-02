"use client";

import { useEffect, useState } from "react";

type Props = {
  servedRevision: string;
  lastVerifiedProductionCommit: string;
};

type CheckState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; mainSha: string };

const shortSha = (value: string) => (value && value !== "UNKNOWN" ? value.slice(0, 12) : value || "UNKNOWN");

export default function MainHeadStatus({ servedRevision, lastVerifiedProductionCommit }: Props) {
  const [state, setState] = useState<CheckState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;

    fetch("https://api.github.com/repos/ssalem9580/master-hub/commits/main", {
      cache: "no-store",
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((response) => {
        if (!response.ok) throw new Error(`GitHub ${response.status}`);
        return response.json() as Promise<{ sha?: string }>;
      })
      .then((payload) => {
        if (cancelled) return;
        if (!payload.sha) throw new Error("Missing main SHA");
        setState({ status: "ready", mainSha: payload.sha });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error" });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  let headline = "CHECKING CURRENT MAIN";
  let detail = "Comparing the repository head with the revision served by this page.";

  if (state.status === "error") {
    headline = "CURRENT MAIN CHECK UNAVAILABLE";
    detail = "The live GitHub main check could not be completed. Build-time canonical records remain available below.";
  }

  if (state.status === "ready") {
    const mainMatchesServed = state.mainSha === servedRevision;
    const verifiedMatchesServed = lastVerifiedProductionCommit === servedRevision;

    if (!mainMatchesServed) {
      headline = "SOURCE AHEAD OF THIS DEPLOYMENT";
      detail = `Current main ${shortSha(state.mainSha)} differs from served revision ${shortSha(servedRevision)}.`;
    } else if (!verifiedMatchesServed) {
      headline = "SERVED BUILD AHEAD OF LAST VERIFIED RECORD";
      detail = `Current main and this served build are ${shortSha(servedRevision)}; the last verified production record is ${shortSha(lastVerifiedProductionCommit)}.`;
    } else {
      headline = "SOURCE / SERVED BUILD / VERIFIED RECORD ALIGNED";
      detail = `Current main, served revision and last verified production record all match ${shortSha(servedRevision)}.`;
    }
  }

  return (
    <section style={{ padding: 16, border: "1px solid #283142", borderRadius: 12, background: "#10151f", display: "grid", gap: 7 }}>
      <span style={{ fontSize: 10, color: "#7d8596", letterSpacing: ".1em", fontWeight: 800 }}>LIVE REPOSITORY CHECK</span>
      <strong style={{ fontSize: 14 }}>{headline}</strong>
      <span style={{ fontSize: 12, color: "#aeb5c3", lineHeight: 1.5 }}>{detail}</span>
    </section>
  );
}
