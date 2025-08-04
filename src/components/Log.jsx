export default function Log({ turns, players }) {
  return (
    <ol className="space-y-2">
      {turns.map((turn) => (
        <li key={`${turn.Square.row}-${turn.Square.cell}`}>
          {`${players[turn.player]} selected Row ${turn.Square.row} - Cell ${
            turn.Square.cell
          }`}
        </li>
      ))}
    </ol>
  );
}
