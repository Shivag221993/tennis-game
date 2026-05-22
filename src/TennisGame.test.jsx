import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TennisGame from "./TennisGame";

describe("TennisGame scoring", () => {
  it("initial score is Love - Love", () => {
    render(<TennisGame />);
    expect(screen.getByText(/Love - Love/i)).toBeInTheDocument();
  });
});