import isPlayerOTurn from './isPlayerOTurn';
import gameOn from './gameOn';

import { combineReducers } from 'redux';
const combinedReducers = combineReducers({
  player: isPlayerOTurn,
  game: gameOn,
});

export default combinedReducers;
