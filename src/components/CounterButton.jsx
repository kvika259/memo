import React from "react";

const CounterButton = React.memo(({ handleClick }) => {
  console.log("Render CounterButton");

  return (
    <div>
      <button onClick={handleClick}>+1</button>
    </div>
  );
});

export default CounterButton;
