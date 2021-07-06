import Square from './Square';

const Board = ({ squareData, click, isGameOn }) => {
  const squareComponents = squareData.map((square, i) => (
    <Square
      key={i}
      clicked={square.clicked}
      event={click}
      index={i}
      value={square.value}
    />
  ));
  const Board = isGameOn ? <div className="board">{squareComponents}</div> : '';
  return Board;
};

export default Board;
