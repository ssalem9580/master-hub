import { NextRequest, NextResponse } from "next/server";

type HubTarget = { name: string; path?: string; url?: string };

const targets: HubTarget[] = [
  { name: "Project Control Center", path: "/project-control" },
  { name: "Field Diagnostic Hub", path: "/field-resource-hub" },
  { name: "Scope Templates", path: "/scope-templates" },
  { name: "Finances Command Center", path: "/finances-command-center" },
  { name: "NTE Exceed/Quote Generator", url: "https://job-quote-calculator-tau.vercel.app" },
  { name: "Billed Work Tracker", url: "https://billed-work-tracker-live.vercel.app" },
  { name: "Recovery Value Calculator", url: "https://recovery-value-calculator.vercel.app" },
  { name: "Private Client", url: "https://privateclient.samsalem0319.chatgpt.site/" },
  { name: "Illinois Locksmith Exam Prep", url: "https://illinois-locksmith-exam-tutor.samsalem0319.chatgpt.site/" },
  { name: "Sam Hub", url: "https://sam-hub-six.vercel.app" },
];

async function checkTarget(request: NextRequest, target: HubTarget) {
  const url = target.url ?? new URL(target.path ?? "/", request.nextUrl.origin).toString();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4500);

  try {
    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "MasterHubHealth/1.0" },
    });
    return {
      name: target.name,
      status: response.ok ? "Live" : "Offline",
      httpStatus: response.status,
      checkedAt: new Date().toISOString(),
    } as const;
  } catch {
    return {
      name: target.name,
      status: "Offline",
      httpStatus: null,
      checkedAt: new Date().toISOString(),
    } as const;
  } finally {
    clearTimeout(timeout);
  }
}

export async function GET(request: NextRequest) {
  const results = await Promise.all(targets.map((target) => checkTarget(request, target)));
  return NextResponse.json(
    { results },
    { headers: { "Cache-Control": "no-store, max-age=0" } },
  );
}
