import { useState } from "react";

const scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];

const getScore = (p1, p2) => {
  if (p1 >= 3 && p2 >= 3 && p1 === p2) {
    return "Deuce";
  }
  return `${scoreNames[p1]} - ${scoreNames[p2]}`;
};

export default function TennisGame() {
  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);

  return (
    <div>
      <h1>{getScore(p1, p2)}</h1>
      <button onClick={() => setP1(p1 + 1)}>Player 1 Scores</button>
      <button onClick={() => setP2(p2 + 1)}>Player 2 Scores</button>
    </div>
  );
}
