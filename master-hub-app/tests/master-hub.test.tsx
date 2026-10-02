import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { MasterHub } from "@/components/master-hub";

beforeEach(() => {
  localStorage.clear();
  vi.stubGlobal("crypto", { randomUUID: () => "new-task" });
  vi.stubGlobal("confirm", vi.fn(() => true));
});

describe("Master Hub", () => {
  it("searches the current hub directory and shows an empty state", async () => {
    const user = userEvent.setup();
    render(<MasterHub />);

    await user.click(screen.getByRole("button", { name: /^Directory/ }));
    await user.type(screen.getByPlaceholderText("Search tools or actions"), "zzzz");

    expect(screen.getByText("No matching workspaces")).toBeInTheDocument();
  });

  it("captures a new action with the current Add action flow", async () => {
    const user = userEvent.setup();
    render(<MasterHub />);

    await user.click(screen.getAllByRole("button", { name: "Add action" })[0]);
    await user.type(screen.getByLabelText("Action"), "Call the dentist");
    await user.click(screen.getByLabelText("Important"));
    const form = screen.getByLabelText("Action").closest("form")!;
    await user.click(within(form).getByRole("button", { name: "Add action" }));

    expect(screen.getByText("Call the dentist")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "★" })).toBeInTheDocument();
  });

  it("toggles importance and confirms deletion for a current action", async () => {
    const user = userEvent.setup();
    render(<MasterHub />);

    await user.click(screen.getAllByRole("button", { name: "Add action" })[0]);
    await user.type(screen.getByLabelText("Action"), "Review estimate");
    const form = screen.getByLabelText("Action").closest("form")!;
    await user.click(within(form).getByRole("button", { name: "Add action" }));

    await user.click(screen.getByRole("button", { name: "☆" }));
    expect(screen.getByRole("button", { name: "★" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Delete" }));
    expect(confirm).toHaveBeenCalledWith("Delete this action?");
    expect(screen.queryByText("Review estimate")).not.toBeInTheDocument();
  });
});