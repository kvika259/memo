import React from "react";
import { useMemo } from "react";

const ItemList = React.memo(({ arr, search }) => {
  const searching = useMemo(() => {
    return arr.filter(i => i.includes(search));
  }, [arr, search]);

  console.log("Render ItemList");
  return (
    <ol>
      {searching.map((i, id) => (
        <li key={id}>{i}</li>
      ))}
    </ol>
  );
});

export default ItemList;
