import isPlayerOTurn from './isPlayerOTurn';
import gameOn from './gameOn';

import { combineReducers } from 'redux';
const combinedReducers = combineReducers({
  isPlayerOTurn: true,
  gameOn: true,
});

export default combinedReducers;
