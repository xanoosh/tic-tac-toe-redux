const isPlayerOTurn = (state = true, action) => {
  switch (action.type) {
    case 'UPDATEISPLAYEROTURN':
      state = !state;
      return state;
    default:
      return state;
  }
};
export default isPlayerOTurn;
