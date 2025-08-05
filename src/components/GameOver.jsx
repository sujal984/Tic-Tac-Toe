// import { Button, Typography } from "antd";

// const { Title, Text } = Typography;

// export default function GameOver({ winner, handleRematch }) {
//   return (
//     <div className="mt-8 text-center">
//       <Title level={2} className="!text-yellow-300">
//         Game Over!
//       </Title>
//       <Text className="text-xl !text-white">
//         {winner ? `${winner} won!` : "It's a draw!"}
//       </Text>
//       <Button type="primary" onClick={handleRematch} className="m-4">
//         Rematch
//       </Button>
//     </div>
//   );
// }

import { Button, Typography } from "antd";

const { Title, Text } = Typography;

export default function GameOver({ winner, handleRematch }) {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex flex-col justify-center items-center z-50">
      <div className="text-center p-8 bg-amber-500/20 rounded-xl shadow-2xl">
        <Title level={2} className="!text-yellow-300">
          Game Over!
        </Title>
        <Text className="text-xl !text-white">
          {winner ? `${winner} won!` : "It's a draw!"}
        </Text>
        <Button type="primary" onClick={handleRematch} className="m-4">
          Rematch
        </Button>
      </div>
    </div>
  );
}
