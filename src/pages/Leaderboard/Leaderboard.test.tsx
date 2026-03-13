import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { it } from "vitest";
import { act } from "@testing-library/react";
import Leaderboard from "./Leaderboard";

it("renders the leaderboard page", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Leaderboard />
      </BrowserRouter>
    );
  });
});
