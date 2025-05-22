import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import { expect } from "vitest";
import fantasy from "../data/fantasy.json";

describe("BookList", () => {
  it("renders as many Bootstrap cards as there are books", () => {
    const { container } = render(<BookList books={fantasy} />);

    const cards = container.querySelectorAll(".card");

    expect(cards.length).toBe(fantasy.length);
  });
});
