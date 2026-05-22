import  { useState } from "react";

const scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];

export default function TennisGame() {
  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);

  return (
    <div>
      <h1>{`${scoreNames[p1]} - ${scoreNames[p2]}`}</h1>
      <button onClick={() => setP1(p1 + 1)}>Player 1 Scores</button>
      <button onClick={() => setP2(p2 + 1)}>Player 2 Scores</button>
    </div>
  );
}