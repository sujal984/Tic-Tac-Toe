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
      bordered={false}
      className={`sm:w-[35%] max-w-[70%] h-full max-h-full  !border-4 ${
        isActive ? " border-amber-500 " : " border-gray-200"
      }`}
      bodyStyle={{ padding: 16, height: "100%" }}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="flex justufy-between  items-center gap-2">
          {isEditing ? (
            <Input
              value={playerName}
              onChange={handleChange}
              className="w-32"
              size="small"
              maxLength={10}
            />
          ) : (
            <Text className="text-white text-lg min-w-[30px]">
              {playerName}
            </Text>
          )}
          <span className="text-2xl ">{player_symbol}</span>
        </span>
        <Button type="primary" size="small" onClick={handleEdit}>
          {isEditing ? "Save" : "Edit"}
        </Button>
      </div>
    </Card>
  );
}

export default Player;
