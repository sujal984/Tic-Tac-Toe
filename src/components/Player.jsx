import React, { useState } from "react";

function Player({ player_name, player_symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(player_name);
  function handleEdit() {
    setIsEditing(() => !isEditing);
    if (isEditing) {
      onChangeName(player_symbol, playerName);
    }
  }
  let player = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    player = (
      <input
        type="text"
        required
        defaultValue={playerName}
        onChange={handleChange}
      />
    );
    btnCaption = "Save";
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {player}

        <span className="player-symbol">{player_symbol}</span>
        <button onClick={handleEdit}>{btnCaption}</button>
      </span>
    </li>
  );
}

export default Player;
