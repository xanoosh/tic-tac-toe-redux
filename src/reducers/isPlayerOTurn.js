const isPlayerOTurn = (state = true, action) => {
  switch (action.type) {
    case 'UPDATEISPLAYEROTURN':
      return !state;
    default:
      return state;
  }
};
export default isPlayerOTurn;
