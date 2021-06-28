import Board from './Board';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [gameOn, setGameOn] = useState(true);
  const [winnigMessage, setWinnigMessage] = useState('');
  const [playerOTurn, setPlayerOTurn] = useState(true);
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
  useEffect(() => {
    checkWinner();
  }, [playerXValues, playerOValues]);
  useEffect(() => {
    if (!gameOn) {
      //set Board to unclickable?
      //show reset button?
    }
  }, [gameOn]);
  const checkWinner = () => {
    if (winningConditions(playerOValues)) {
      setWinnigMessage('Player o won!');
      setGameOn(!gameOn);
    }
    if (winningConditions(playerXValues)) {
      setWinnigMessage('Player x won!');
      setGameOn(!gameOn);
    }
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
    if (playerOTurn) {
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
    setPlayerOTurn(!playerOTurn);
  };
  return (
    <div className="app">
      {winnigMessage && (
        <h2>
          <span>{winnigMessage}</span>
        </h2>
      )}
      <p>
        Current player: <span>{playerOTurn ? 'o' : 'x'}</span>
      </p>
      <Board squareData={squareData} click={handleClick} />
    </div>
  );
}

export default App;
