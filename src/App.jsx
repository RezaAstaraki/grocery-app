import { useEffect, useState } from "react";
import "./App.css";
import ItemAdder from "./components/itemAdder/ItemAdder";
import Items from "./components/items/Items";

function App() {
  const [item, setItem] = useState([]);

  const addItem = (content) => {
    let id = Date.now();
    setItem([...item, { id: id, content: content, status: "pending" }]);
  };

  const removeItem = (itemToRemove) => {
    const newItems = item.filter((i) => i !== itemToRemove);
    console.log("run remove item");
    setItem(newItems);
    console.log("newItems", newItems);
  };

  const handleStatus = (inputItem, event) => {
    console.log("event", event);
    // Check if the event target is the close button
    if (event.target.tagName.toLowerCase() === "button") {
      event.stopPropagation(); // Prevent event from bubbling up
      return;
    }
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
