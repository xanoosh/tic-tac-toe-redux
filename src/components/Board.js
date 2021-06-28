import Square from './Square';

const Board = ({ squareData, click }) => {
  const squareComponents = squareData.map((square, i) => (
    <Square
      key={i}
      clicked={square.clicked}
      event={click}
      index={i}
      value={square.value}
    />
  ));
  return <div className="board">{squareComponents}</div>;
};

export default Board;
