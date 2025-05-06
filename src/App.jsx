import { useState } from "react";
import GameOver from "./components/GameOver.jsx";
import Player from "./components/Player.jsx";
import Gameborad from "./components/Gameboard.jsx";
import Log from "./components/Log.jsx";
import { winningCombination } from "./components/Winning-combination.js";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(Log) {
  let currentplayer = "X";
  if (Log.length > 0 && Log[0].player === "X") {
    currentplayer = "0";
  }
  return currentplayer;
}

function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    0: "Player 2",
  });
  const [log, setLog] = useState([]);
  // const [isWinner, setIsWinner] = useState(false);
  // const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = deriveActivePlayer(log);
  let gameboard = [...initialGameboard].map((array) => [...array]);
  for (const turn of log) {
    // gameboard[turn.Square.row][turn.Square.cell]=turn.player
    const { Square, player } = turn || [];
    const { row, cell } = Square || [];
    gameboard[row][cell] = player || [];
  }
  let winner = null;

  for (const combination of winningCombination) {
    const firstSquare = gameboard[combination[0].row][combination[0].cell];
    const secondSquare = gameboard[combination[1].row][combination[1].cell];
    const thirdSquare = gameboard[combination[2].row][combination[2].cell];
    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    ) {
      // setIsWinner(true);
      winner = players[firstSquare];
    }
  }

  const hasDraw = log.length === 9 && !winner;
  function handleSelectCell(rowIndex, cellIndex) {
    // setActivePlayer(() => (activePlayer === "X" ? "0" : "X"));
    setLog((prevTurns) => {
      const currentplayer = deriveActivePlayer(prevTurns);
      const newTurns = [
        { Square: { row: rowIndex, cell: cellIndex }, player: currentplayer },
        ...prevTurns,
      ];
      return newTurns;
    });
  }
  function handleRematch() {
    console.log("rematch");
    setLog([]);
  }
  function handlePlayerNameChamge(symbol, name) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: name,
      };
    });
  }
  return (
    <main className="updated-ui">
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            player_name={players["X"]}
            player_symbol="X"
            isActive={activePlayer === "X"}
            onChnageName={handlePlayerNameChamge}
          />
          <Player
            player_name={players["X"]}
            player_symbol="0"
            isActive={activePlayer === "0"}
            onChnageName={handlePlayerNameChamge}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} handleRematch={handleRematch} />
        )}
        <Gameborad onSelectCell={handleSelectCell} board={gameboard} />
      </div>
      <Log turns={log} players={players} />
    </main>
  );
}

export default App;
