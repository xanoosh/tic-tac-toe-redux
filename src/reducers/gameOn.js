const gameOn = (state = true, action) => {
  switch (action.type) {
    case 'UPDATEGAMEON':
      return !state;
    default:
      return state;
  }
};
export default gameOn;
