// import React, { useState } from "react";
// import { Button } from "antd";

// function Player({ player_name, player_symbol, isActive, onChangeName }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [playerName, setPlayerName] = useState(player_name);
//   function handleEdit() {
//     setIsEditing(() => !isEditing);
//     if (isEditing) {
//       onChangeName(player_symbol, playerName);
//     }
//   }
//   let player = <span className="player-name">{playerName}</span>;
//   let btnCaption = "Edit";
//   if (isEditing) {
//     player = (
//       <input
//         type="text"
//         required
//         defaultValue={playerName}
//         onChange={handleChange}
//       />
//     );
//     btnCaption = "Save";
//   }
//   function handleChange(event) {
//     setPlayerName(event.target.value);
//   }

//   return (
//     <div className="flex justify-between border-amber-500 border p-4">
//       <div className="text-white">
//         {player}
//         <span className="p-2">{player_symbol}</span>
//       </div>

//       <Button type="primary" onClick={handleEdit}>
//         {btnCaption}
//       </Button>
//     </div>
//   );
// }

// export default Player;

import React, { useState } from "react";
import { Button, Input, Typography, Card } from "antd";
const { Text } = Typography;

function Player({ player_name, player_symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(player_name);

  function handleEdit() {
    if (isEditing) {
      onChangeName(player_symbol, playerName);
    }
    setIsEditing((prev) => !prev);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <Card
      className={`w-full max-w-xs ${
        isActive ? "border-4 border-amber-500" : "border border-gray-300"
      }`}
      style={{ padding: "16px !important" }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isEditing ? (
            <Input
              value={playerName}
              onChange={handleChange}
              className="w-32"
              size="small"
            />
          ) : (
            <Text className="text-white text-lg min-w-[30px]">
              {playerName}
            </Text>
          )}
          <span className="text-2xl text-white">{player_symbol}</span>
        </div>
        <Button type="primary" size="small" onClick={handleEdit}>
          {isEditing ? "Save" : "Edit"}
        </Button>
      </div>
    </Card>
  );
}

export default Player;
