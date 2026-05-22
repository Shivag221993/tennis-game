import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TennisGame from "./TennisGame";

describe("TennisGame scoring", () => {
  it("initial score is Love - Love", () => {
    render(<TennisGame />);
    expect(screen.getByText(/Love - Love/i)).toBeInTheDocument();
  });
  it("player one scores first point", () => {
    render(<TennisGame />);
    fireEvent.click(screen.getByText("Player 1 Scores"));
    expect(screen.getByText(/Fifteen - Love/i)).toBeInTheDocument();
  });

  it("player two scores twice", () => {
    render(<TennisGame />);
    fireEvent.click(screen.getByText("Player 2 Scores"));
    fireEvent.click(screen.getByText("Player 2 Scores"));
    expect(screen.getByText(/Love - Thirty/i)).toBeInTheDocument();
  });
});
