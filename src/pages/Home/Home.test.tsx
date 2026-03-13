import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { expect, it } from "vitest";
import Home from "./Home";

it("renders the welcome message and navigation links", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  expect(screen.getByText(/Welcome/i)).toBeInTheDocument();

  expect(screen.getByText(/Play Wordlish/i)).toBeInTheDocument();

  expect(screen.getByText(/View Leaderboards/i)).toBeInTheDocument();
});
