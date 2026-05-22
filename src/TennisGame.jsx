import  { useState } from "react";

const scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];

export default function TennisGame() {
  const [p1] = useState(0);
  const [p2] = useState(0);

  return (
    <div>
      <h1>{`${scoreNames[p1]} - ${scoreNames[p2]}`}</h1>
      <button>Player 1 Scores</button>
      <button>Player 2 Scores</button>
    </div>
  );
}