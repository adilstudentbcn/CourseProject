import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { it } from "vitest";

import { act } from "@testing-library/react";
import LeaderboardDetail from "./LeaderboardDetail";

it("renders the leaderboard detail page", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <LeaderboardDetail />
      </BrowserRouter>
    );
  });
});
