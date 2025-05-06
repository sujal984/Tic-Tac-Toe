import React, { useState } from "react";

function Log({ turns, players }) {
  const latestTurns = turns.slice(0, 5);
  return (
    <ol id="log">
      {latestTurns.map((turn) => (
        <li key={`${turn.Square.row}-${turn.Square.cell}`}>
          {players[turn.player]} selected Raw {turn.Square.row} - Cell{" "}
          {turn.Square.cell}
        </li>
      ))}
    </ol>
  );
}

export default Log;
