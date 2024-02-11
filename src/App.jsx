import { useEffect, useState } from "react";
import "./App.css";
import ItemAdder from "./components/itemAdder/ItemAdder";
import Items from "./components/items/Items";

function App() {
  const [item, setItem] = useState([]);

  const addItem = (content) => {
    setItem([...item, { content: content, status: "pending" }]);
  };

  const removeItem = (itemToRemove) => {
    const newItems = item.filter((i) => i !== itemToRemove);
    console.log("run remove item");
    setItem(newItems);
    console.log("newItems", newItems);
  };

  const handleStatus = (inputItem) => {
    let itemEdit;
    itemEdit = item.map((i) => {
      if (i === inputItem) {
        i.status = i.status === "done" ? "pending" : "done";
      }
      return i;
    });

    console.log("itemEdit", itemEdit);
    setItem(itemEdit);
  };

  useEffect(() => {
    console.log("item", item);
  });

  return (
    <>
      <div className="app">
        <ItemAdder addItem={addItem} />
        <Items
          items={item}
          removeItem={removeItem}
          handleStatus={handleStatus}
        />
      </div>
    </>
  );
}

export default App;
