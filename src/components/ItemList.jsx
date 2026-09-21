import React from "react";

const ItemList = React.memo(({ search, arr }) => {
  console.log("Render ItemList");
  return (
    <ol>
      {arr
        .filter(i => i.includes(search))
        .map((i, id) => (
          <li key={id}>{i}</li>
        ))}
    </ol>
  );
});

export default ItemList;
