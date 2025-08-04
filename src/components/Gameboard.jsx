function Gameboard({ onSelectCell, board }) {
  return (
    <div id="game-board-container">
      <ol id="game-board">
        {board.map((row, rowIndex) => {
          return (
            <li key={rowIndex}>
              <ol className="board-row">
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
    </div>
  );
}
export default Gameboard;
