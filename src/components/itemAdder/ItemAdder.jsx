import { useState } from "react";
import "./itemAdder.scss";

export default function ItemAdder({ items, addItem }) {
  const [content, setContent] = useState("");
  return (
    <div className="itemAdder">
      <label htmlFor="inputItem">Item</label>
      <input
        required={true}
        id="inputItem"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input type="button" value="add" onClick={() => addItem(content)} />
    </div>
  );
}
