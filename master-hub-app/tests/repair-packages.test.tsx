// @vitest-environment jsdom

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import RepairPackagesPage from "@/app/repair-packages/page";

const masterRow = "11066404000A\tSpherical Block Tape\t $102.74 ";

beforeEach(() => {
  localStorage.clear();
  vi.restoreAllMocks();
  vi.stubGlobal("fetch", vi.fn(async () => ({
    ok: true,
    text: async () => masterRow,
  })));
});

describe("Repair Package Builder DEF-010", () => {
  it("completes Part # → Name → Cost → Add → Total → Persistence", async () => {
    const user = userEvent.setup();
    const first = render(<RepairPackagesPage />);

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(4));

    await user.type(
      screen.getByPlaceholderText("Example: Replace VAT 21 motor"),
      "Replace VAT 21 spherical block tape",
    );

    const partNumber = screen.getByPlaceholderText("11066404000A");
    await user.type(partNumber, "11066404000A");

    await waitFor(() => {
      expect(screen.getByDisplayValue("Spherical Block Tape")).toBeInTheDocument();
      expect(screen.getByDisplayValue("$102.74")).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: "Add part" }));

    await waitFor(() => {
      expect(screen.getAllByText("$102.74").length).toBeGreaterThanOrEqual(2);
      expect(screen.getByText("Spherical Block Tape")).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: "Save package" }));

    await waitFor(() => {
      const draft = localStorage.getItem("master-hub:repair-package-draft:v2") || "";
      const saved = localStorage.getItem("master-hub:repair-packages:v3") || "";
      expect(draft).toContain("11066404000A");
      expect(draft).toContain("102.74");
      expect(saved).toContain("11066404000A");
      expect(saved).toContain("102.74");
    });

    first.unmount();
    render(<RepairPackagesPage />);

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(8));
    await waitFor(() => {
      expect(screen.getByDisplayValue("Replace VAT 21 spherical block tape")).toBeInTheDocument();
      expect(screen.getAllByText("$102.74").length).toBeGreaterThanOrEqual(2);
      expect(screen.getByRole("button", { name: /Replace VAT 21 spherical block tape/ })).toBeInTheDocument();
    });
  });
});
