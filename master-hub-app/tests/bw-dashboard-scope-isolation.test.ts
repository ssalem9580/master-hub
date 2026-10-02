import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { GET } from "@/app/api/scope-isolation/route";

describe("BW Lead direct scope isolation loader", () => {
  it("loads the centralized isolation engine in the direct BW dashboard", async () => {
    const html = fs.readFileSync(path.join(process.cwd(), "public", "bw-dashboard.html"), "utf8");
    expect(html).toContain('<script src="/api/scope-isolation"></script>');

    const response = GET();
    expect(response.headers.get("content-type")).toContain("application/javascript");
    const script = await response.text();
    expect(script).toContain("importedHierarchy");
    expect(script).toContain("scopeCompatible");
    expect(script).toContain("cannot be attached");
  });
});
