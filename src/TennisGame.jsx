import { useState } from "react";

const scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];

export default function TennisGame() {
  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);

  const getScore = () => {
    if (p1 >= 3 && p2 >= 3) {
      if (p1 === p2) return "Deuce";
      if (p1 === p2 + 1) return "Advantage Player 1";
      if (p2 === p1 + 1) return "Advantage Player 2";
      if (p1 >= p2 + 2) return "Player 1 Wins!";
      if (p2 >= p1 + 2) return "Player 2 Wins!";
    }
    if (p1 >= 4) return "Player 1 Wins!";
    if (p2 >= 4) return "Player 2 Wins!";
    return `${scoreNames[p1]} - ${scoreNames[p2]}`;
  };

  const score = getScore();
  const gameOver = score.includes("Wins!");

  return (
    <div>
      <h1>{score}</h1>
      <button onClick={() => setP1(p1 + 1)} disabled={gameOver}>
        Player 1 Scores
      </button>
      <button onClick={() => setP2(p2 + 1)} disabled={gameOver}>
        Player 2 Scores
      </button>
    </div>
  );
}