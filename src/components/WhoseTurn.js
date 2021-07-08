const WhoseTurn = ({ turn }) => {
  return (
    <p>
      Current player:
      <span>{turn ? 'o' : 'x'}</span>
    </p>
  );
};

export default WhoseTurn;
