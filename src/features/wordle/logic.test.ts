import { describe, it, expect } from "vitest";
import { getLetterState, createState } from "./logic";

describe("Wordlish Logic", () => {
  it("identifies a correct letter in the correct position (green)", () => {
    const state = createState("apple");
    expect(getLetterState(state, "a", 0)).toBe("#538d4e");
  });

  it("identifies a present letter in the wrong position (yellow)", () => {
    const state = createState("apple");
    expect(getLetterState(state, "e", 0)).toBe("#b59f3b");
  });

  it("identifies a completely absent letter (black/grey)", () => {
    const state = createState("apple");
    expect(getLetterState(state, "z", 0)).toBe("#636381");
  });
});
