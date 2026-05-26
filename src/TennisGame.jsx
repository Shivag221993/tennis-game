import { useReducer, useCallback } from "react";
import { SCORE_NAMES, MESSAGES } from "../common/constants";
import "./TennisGame.css";

// Initial state for the game
// p1 = Player 1 score, p2 = Player 2 score
const initialState = { p1: 0, p2: 0 };

// Reducer function to handle all state transitions
// Instead of multiple useState calls, we centralize updates here
function reducer(state, action) {
  switch (action.type) {
    case "P1": // Player 1 scores a point
      return { ...state, p1: state.p1 + 1 };
    case "P2": // Player 2 scores a point
      return { ...state, p2: state.p2 + 1 };
    case "RESET": // Reset both scores back to 0
      return initialState;
    default:
      return state; // Return unchanged state if action not recognized
  }
}

export default function TennisGame() {
  // useReducer replaces multiple useState calls
  // dispatch is used to trigger actions defined in reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to calculate the current score string
  const getScore = () => {
    const { p1, p2 } = state;

    // Handle deuce/advantage/win scenarios when both players reach 3+
    if (p1 >= 3 && p2 >= 3) {
      if (p1 === p2) return MESSAGES.DEUCE;
      if (p1 === p2 + 1) return MESSAGES.ADV_P1;
      if (p2 === p1 + 1) return MESSAGES.ADV_P2;
      if (p1 >= p2 + 2) return MESSAGES.WIN_P1;
      if (p2 >= p1 + 2) return MESSAGES.WIN_P2;
    }

    // Handle win conditions if one player reaches 4 points first
    if (p1 >= 4) return MESSAGES.WIN_P1;
    if (p2 >= 4) return MESSAGES.WIN_P2;

    // Default case: show score names (Love, Fifteen, etc.)
    return `${SCORE_NAMES[p1]} - ${SCORE_NAMES[p2]}`;
  };

  // Current score string
  const score = getScore();

  // Check if the game is over (someone has won)
  const gameOver = score.includes("Wins!");

  // Memoized event handlers using useCallback
  // These prevent unnecessary re-creations on re-renders
  const handleP1Score = useCallback(() => dispatch({ type: "P1" }), []);
  const handleP2Score = useCallback(() => dispatch({ type: "P2" }), []);
  const resetGame = useCallback(() => dispatch({ type: "RESET" }), []);

  return (
    <div className="tennis-container">
      {/* Display current score */}
      <h1 className="score">{score}</h1>

      {/* Buttons for scoring and reset */}
      <div className="buttons">
        {/* Player 1 button disabled if game is over */}
        <button onClick={handleP1Score} disabled={gameOver}>
          {MESSAGES.BUTTON_P1}
        </button>

        {/* Player 2 button disabled if game is over */}
        <button onClick={handleP2Score} disabled={gameOver}>
          {MESSAGES.BUTTON_P2}
        </button>

        {/* Reset button only appears when game is finished */}
        {gameOver && (
          <button className="reset-btn" onClick={resetGame}>
            {MESSAGES.RESET}
          </button>
        )}
      </div>
    </div>
  );
}
