import { render } from "@testing-library/react";

import { it } from "vitest";
import App from "./App";

it("renders the App without crashing", () => {
  render(<App />);
});
