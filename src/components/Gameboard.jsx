import { Button, Row, Col } from "antd";

export default function Gameboard({ board, onSelectCell }) {
  return (
    <div className="bg-amber-200 p-5 w-[350px] sm:w-auto">
      {board.map((row, rowIndex) => (
        <Row key={rowIndex} justify="center">
          {row.map((cell, cellIndex) => (
            <Col
              key={`${rowIndex}-${cellIndex}`}
              className="justify-center items-center !gap-2 "
            >
              <Button
                onClick={() => onSelectCell(rowIndex, cellIndex)}
                disabled={cell !== null}
                className="
                
                !m-5 min-w-[50px] min-h-[50px] !text-4xl
                sm:min-w-[100px] sm:min-h-[100px] sm:!text-7xl !bg-amber-100 hover:!bg-amber-300 "
              >
                {cell}
              </Button>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
}
