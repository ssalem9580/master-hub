import { scopeIsolationScript } from "@/lib/scope-isolation-script";

export function GET() {
  return new Response(scopeIsolationScript, {
    headers: {
      "content-type": "application/javascript; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
