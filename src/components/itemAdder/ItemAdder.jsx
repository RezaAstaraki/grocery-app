import { useState } from "react";
import "./itemAdder.scss";

export default function ItemAdder({ items, addItem }) {
  const [content, setContent] = useState("");
  return (
    <div className="itemAdder">
      <label htmlFor="inputItem">Item</label>
      <input
        id="inputItem"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={() => addItem(content)}>Add</button>
    </div>
  );
}
