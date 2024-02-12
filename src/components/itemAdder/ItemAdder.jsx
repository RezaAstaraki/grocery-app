import { useState, useRef, useEffect } from "react";
import "./itemAdder.scss";

export default function ItemAdder({ items, addItem }) {
  const [content, setContent] = useState("");
  const ref = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      e.stopPropagation();
      if (e.key === "Enter") {
        e.preventDefault(); // Prevent the default behavior of the Enter key
        buttonRef.current.click();
      }
    });
  }, []);

  return (
    <div className="itemAdder">
      <label htmlFor="inputItem">Item</label>
      <input
        ref={ref}
        required={true}
        id="inputItem"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        ref={buttonRef}
        type="button"
        value="add"
        onClick={() => addItem(content, ref.current)}
      />
    </div>
  );
}
