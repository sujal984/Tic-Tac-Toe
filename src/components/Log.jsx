function Log({ turns, players }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.Square.row}-${turn.Square.cell}`} className="log-item">
          {players[turn.player]} selected Raw {turn.Square.row} - Cell{" "}
          {turn.Square.cell}
        </li>
      ))}
    </ol>
  );
}

export default Log;
