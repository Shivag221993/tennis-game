import { useState } from "react";
import { SCORE_NAMES, MESSAGES } from "../common/constants";
import "./TennisGame.css";

export default function TennisGame() {
  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);

  const getScore = () => {
    if (p1 >= 3 && p2 >= 3) {
      if (p1 === p2) return MESSAGES.DEUCE;
      if (p1 === p2 + 1) return MESSAGES.ADV_P1;
      if (p2 === p1 + 1) return MESSAGES.ADV_P2;
      if (p1 >= p2 + 2) return MESSAGES.WIN_P1;
      if (p2 >= p1 + 2) return MESSAGES.WIN_P2;
    }
    if (p1 >= 4) return MESSAGES.WIN_P1;
    if (p2 >= 4) return MESSAGES.WIN_P2;
    return `${SCORE_NAMES[p1]} - ${SCORE_NAMES[p2]}`;
  };

  const score = getScore();
  const gameOver = score.includes("Wins!");

  const resetGame = () => {
    setP1(0);
    setP2(0);
  };

  return (
    <div className="tennis-container">
      <h1 className="score">{score}</h1>
      <div className="buttons">
        <button onClick={() => setP1(p1 + 1)} disabled={gameOver}>
          {MESSAGES.BUTTON_P1}
        </button>
        <button onClick={() => setP2(p2 + 1)} disabled={gameOver}>
          {MESSAGES.BUTTON_P2}
        </button>
        {gameOver && (
          <button className="reset-btn" onClick={resetGame}>
            {MESSAGES.RESET}
          </button>
        )}
      </div>
    </div>
  );
}
