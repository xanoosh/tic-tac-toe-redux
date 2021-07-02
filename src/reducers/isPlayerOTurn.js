const isPlayerOTurn = (state = true, action) => {
  if (action.type === 'UPDATEISPLAYEROTURN') return !state;
};
export default isPlayerOTurn;
