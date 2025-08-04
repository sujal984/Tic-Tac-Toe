import { useState } from "react";
import GameOver from "./components/GameOver.jsx";
import Player from "./components/Player.jsx";
import Gameborad from "./components/Gameboard.jsx";
import Log from "./components/Log.jsx";
import { winningCombination } from "./components/Winning-combination.js";
import "./index.css";
import { Drawer, Button } from "antd";
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function showDrawer() {
    setIsDrawerOpen(true);
  }

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  const [players, setPlayers] = useState({
    X: "Player 1",
    0: "Player 2",
  });
  const [log, setLog] = useState([]);
  const activePlayer = deriveActivePlayer(log);
  let gameboard = [...initialGameboard].map((array) => [...array]);
  for (const turn of log) {
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
      winner = players[firstSquare];
    }
  }

  const hasDraw = log.length === 9 && !winner;
  function handleSelectCell(rowIndex, cellIndex) {
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
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div id="game-container">
        <div id="game-board-and-players">
          <ol id="players" className="highlight-player">
            <Player
              player_name={players["X"]}
              player_symbol="X"
              isActive={activePlayer === "X"}
              onChangeName={handlePlayerNameChamge}
            />
            <Player
              player_name={players["0"]}
              player_symbol="0"
              isActive={activePlayer === "0"}
              onChangeName={handlePlayerNameChamge}
            />
          </ol>
          {(winner || hasDraw) && (
            <GameOver winner={winner} handleRematch={handleRematch} />
          )}
          <Gameborad onSelectCell={handleSelectCell} board={gameboard} />

          <Button
            type="primary"
            onClick={showDrawer}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
            }}
            disabled={!log.length}
          >
            Show Logs
          </Button>
          <Drawer
            title="Game Logs"
            placement="right"
            onClose={closeDrawer}
            open={isDrawerOpen}
          >
            <Log turns={log} players={players} />
          </Drawer>
        </div>
      </div>
    </main>
  );
}

export default App;
