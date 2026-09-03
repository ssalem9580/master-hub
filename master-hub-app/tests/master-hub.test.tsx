import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { MasterHub } from "@/components/master-hub";
beforeEach(() => { localStorage.clear(); vi.stubGlobal("crypto", { randomUUID: () => "new-task" }); vi.stubGlobal("confirm", vi.fn(() => true)); });
describe("Master Hub", () => {
 it("searches and exposes the empty state", async () => { render(<MasterHub />); const search = screen.getByRole("searchbox"); await userEvent.type(search, "zzzz"); expect(screen.getByText("No actions found")).toBeInTheDocument(); });
 it("validates and captures a personal action", async () => { render(<MasterHub />); await userEvent.click(screen.getByRole("button", { name: /quick capture/i })); fireEvent.submit(screen.getByRole("button", { name: "Capture action" }).closest("form")!); expect(screen.getByText(/at least 3 characters/i)).toBeInTheDocument(); await userEvent.type(screen.getByLabelText(/what needs/i), "Call the dentist"); await userEvent.click(screen.getByRole("radio", { name: /personal/i })); await userEvent.click(screen.getByRole("button", { name: "Capture action" })); expect(screen.getByText("Call the dentist")).toBeInTheDocument(); });
 it("toggles importance and confirms deletion", async () => { render(<MasterHub />); await userEvent.click(screen.getByLabelText(/remove importance from review/i)); expect(screen.getByLabelText(/mark important review/i)).toBeInTheDocument(); await userEvent.click(screen.getByLabelText(/delete review/i)); expect(confirm).toHaveBeenCalled(); });
});