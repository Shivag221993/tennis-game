import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TennisGame from "../components/TennisGame.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TennisGame />
  </StrictMode>,
);
