import { render } from "@testing-library/react";
import { it } from "vitest";
import Guesses from "./Guesses";

it("renders the guesses grid component", () => {
  render(<Guesses guesses={[]} currentGuess="" getState={() => "grey"} />);
});
