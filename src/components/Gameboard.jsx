// [0][1][2]
// [3][4][5]
// [6][7][8];

// 012;
// 048;
// 036;
// 147;
// 246;
// 258;
// 345;
// 678;

function Gameboard({ onSelectCell, board }) {
  // const [gameboard, setGameboard] = useState(initialGameboard);

  // function handleSelectCell(rowIndex, cellIndex) {
  //   setGameboard((prevGameboard) => {
  //     const updatedGameboard = [
  //       ...prevGameboard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedGameboard[rowIndex][cellIndex] = activePlayer;
  //     return updatedGameboard;
  //   });

  //   onSelectCell(rowIndex, cellIndex);

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((cell, cellIndex) => {
                return (
                  <button
                    key={cellIndex}
                    onClick={() => onSelectCell(rowIndex, cellIndex)}
                    disabled={cell !== null}
                  >
                    {cell}
                  </button>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
export default Gameboard;
