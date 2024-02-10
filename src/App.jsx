import { useState } from "react";
import "./App.css";
import ItemAdder from "./components/itemAdder/ItemAdder";
import Items from "./components/items/Items";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <ItemAdder />
        <Items />
      </div>
    </>
  );
}

export default App;
