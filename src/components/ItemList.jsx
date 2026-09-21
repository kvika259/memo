import React from "react";

const ItemList = React.memo(({ arr }) => {
  console.log("Render ItemList");
  return (
    <ol>
      {arr.map((i, id) => (
        <li key={id}>{i}</li>
      ))}
    </ol>
  );
});

export default ItemList;
