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
  const classes = isGameOn ? 'board' : 'board finished';
  return <div className={classes}>{squareComponents}</div>;
};

export default Board;
