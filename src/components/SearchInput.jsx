import React from "react";
const SearchInput = React.memo(({ text, handleChange }) => {
  console.log("Render SearchInput");
  return <input value={text} onChange={handleChange} />;
});

export default SearchInput;
