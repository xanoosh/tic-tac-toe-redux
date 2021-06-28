const Square = ({ clicked, event, index, value }) => {
  return (
    <div
      className="square"
      onClick={
        clicked
          ? undefined
          : () => {
              event(index);
            }
      }
    >
      <div className="symbol">{value}</div>
    </div>
  );
};

export default Square;
