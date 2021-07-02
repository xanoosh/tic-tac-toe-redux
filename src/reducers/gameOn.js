const gameOn = (state = true, action) => {
  if (action.type === 'UPDATEGAMEON') return !state;
};
export default gameOn;
