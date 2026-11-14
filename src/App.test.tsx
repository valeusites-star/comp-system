import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("COMP SYSTEM workspace shell", () => {
  it("renders the main dashboard and demo-data disclosure", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /Bom dia, Eric/i })
    ).toBeTruthy();
    expect(
      screen.getByText(/Dados demonstrativos para apresentação visual/i)
    ).toBeTruthy();
  });

  it("opens the selected module preview when a navigation item is clicked", () => {
    render(<App />);

    const agentsNavigation = screen.getAllByRole("button", {
      name: /Agentes de IA/i,
    })[0];
    fireEvent.click(agentsNavigation);

    expect(
      screen.getByText(/Esta área está representada nesta prévia/i)
    ).toBeTruthy();
  });

  it("allows the sidebar to collapse and expand", () => {
    render(<App />);

    const toggle = screen.getAllByRole("button", { name: "Recolher menu" })[0];
    fireEvent.click(toggle);

    expect(screen.getByTitle("Visão geral")).toBeTruthy();
  });
});
