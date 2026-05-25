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

  it("deuce situation at 40-40", () => {
    render(<TennisGame />);
    const p1 = screen.getByText("Player 1 Scores");
    const p2 = screen.getByText("Player 2 Scores");

    for (let i = 0; i < 3; i++) {
      fireEvent.click(p1);
      fireEvent.click(p2);
    }
    expect(screen.getByText(/Deuce/i)).toBeInTheDocument();
  });

  it("advantage situation", () => {
    render(<TennisGame />);
    const p1 = screen.getByText("Player 1 Scores");
    const p2 = screen.getByText("Player 2 Scores");

    for (let i = 0; i < 3; i++) {
      fireEvent.click(p1);
      fireEvent.click(p2);
    }
    fireEvent.click(p1);
    expect(screen.getByText(/Advantage Player 1/i)).toBeInTheDocument();
  });

  it("player wins after advantage", () => {
    render(<TennisGame />);
    const p1 = screen.getByText("Player 1 Scores");
    const p2 = screen.getByText("Player 2 Scores");

    for (let i = 0; i < 3; i++) {
      fireEvent.click(p1);
      fireEvent.click(p2);
    }
    fireEvent.click(p1);
    fireEvent.click(p1);
    expect(screen.getByText(/Player 1 Wins!/i)).toBeInTheDocument();
  });
});