import Board from './Board';
import WhoseTurn from './WhoseTurn';
import ResetBtn from './ResetBtn';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateGameOn, updateIsPlayerOTurn } from '../actions';
function App() {
  // const [gameOn, setGameOn] = useState(true);
  // const [isPlayerOTurn, setIsPlayerOTurn] = useState(true);
  const [winningMessage, setWinningMessage] = useState('');
  const [playerOValues, setPlayerOValues] = useState([]);
  const [playerXValues, setPlayerXValues] = useState([]);
  const [squareData, setSquareData] = useState([
    { value: '', clicked: false },
    { value: '', clicked: false },
    { value: '', clicked: false },
    { value: '', clicked: false },
    { value: '', clicked: false },
    { value: '', clicked: false },
    { value: '', clicked: false },
    { value: '', clicked: false },
    { value: '', clicked: false },
  ]);
  //redux setup
  let gameOn = useSelector((state) => state.game);
  let isPlayerOTurn = useSelector((state) => state.player);
  // let isPlayerOTurn = store.getState

  const dispatch = useDispatch();
  useEffect(() => {
    checkWinner();
  }, [playerXValues, playerOValues]);
  useEffect(() => {
    if (gameOn === false) {
      //set Board to unclickable?
      //show reset button?
      console.log(`game ended`);
    }
  }, [gameOn]);
  const checkWinner = () => {
    if (winningConditions(playerOValues)) {
      setWinningMessage('Player o won!');
      dispatch(updateGameOn());
      return;
    }
    if (winningConditions(playerXValues)) {
      setWinningMessage('Player x won!');
      dispatch(updateGameOn());
      return;
    }
    if (allChecked()) {
      setWinningMessage('Draw');
      dispatch(updateGameOn());
      return;
    }
  };
  const allChecked = () => {
    const squaresArray = squareData;
    let clickedCount = 0;
    for (const square of squaresArray) {
      if (square.clicked) clickedCount++;
    }
    if (clickedCount === squaresArray.length) return true;
    return false;
  };
  const winningConditions = (values) => {
    if (containsArray(values, [0, 1, 2])) return true;
    if (containsArray(values, [3, 4, 5])) return true;
    if (containsArray(values, [6, 7, 8])) return true;
    if (containsArray(values, [0, 3, 6])) return true;
    if (containsArray(values, [1, 4, 7])) return true;
    if (containsArray(values, [2, 5, 8])) return true;
    if (containsArray(values, [0, 4, 8])) return true;
    if (containsArray(values, [2, 4, 6])) return true;
    return false;
  };
  const containsArray = (values, arr) => {
    let result = true;
    arr.forEach((el) => {
      if (!values.includes(el)) result = false;
    });
    return result;
  };
  const handleClick = (e) => {
    if (isPlayerOTurn) {
      setPlayerOValues((prev) => [...prev, e]);
      const newSquareData = [...squareData];
      newSquareData[e].value = 'o';
      newSquareData[e].clicked = true;
      setSquareData(newSquareData);
    } else {
      setPlayerXValues((prev) => [...prev, e]);
      const newSquareData = [...squareData];
      newSquareData[e].value = 'x';
      newSquareData[e].clicked = true;
      setSquareData(newSquareData);
    }
    // setIsPlayerOTurn(!isPlayerOTurn);
    console.log('update store');
    dispatch(updateIsPlayerOTurn());
  };

  const handleClickReset = () => {
    setWinningMessage('');
    setPlayerOValues([]);
    setPlayerXValues([]);
    resetSquareData();
    if (!isPlayerOTurn) dispatch(updateIsPlayerOTurn());
    dispatch(updateGameOn());
  };
  const resetSquareData = () => {
    const squareDataArray = squareData;
    squareDataArray.forEach((square) => {
      square.value = '';
      square.clicked = false;
    });
    setSquareData(squareDataArray);
  };
  return (
    <div className="app">
      {gameOn && <WhoseTurn turn={isPlayerOTurn} />}
      {!gameOn && winningMessage && (
        <h2>
          <span>{winningMessage}</span>
        </h2>
      )}
      <Board isGameOn={gameOn} squareData={squareData} click={handleClick} />

      {!gameOn && <ResetBtn click={handleClickReset} />}
    </div>
  );
}

export default App;
