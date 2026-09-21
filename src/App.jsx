//React Compiler — новый инструмент из React 19.React Compiler автоматически делает за вас всю работу, для которой раньше создавались useCallback и useMemo
// для отключения добавьте специальную директиву "use no memo"

"use no memo";

import { useState, useCallback } from "react";
import CounterButton from "./components/CounterButton";
import ItemList from "./components/ItemList";
import SearchInput from "./components/SearchInput";
import { useMemo } from "react";

const arr = [];
for (let i = 1; i < 101; i++) {
  arr.push(`Элемент ${i}`);
}
function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = useCallback(() => {
    setCounter(prev => prev + 1);
  }, []);

  const [text, setText] = useState("");
  const handleChange = useCallback(e => setText(e.target.value), []);

  const searching = useMemo(() => {
    return arr.filter(i => i.includes(text));
  }, [text]);
  return (
    <>
      Счётчик: {counter}
      <CounterButton handleClick={handleClick} />
      <SearchInput text={text} handleChange={handleChange} />
      <ItemList arr={searching} />
    </>
  );
}

export default App;
