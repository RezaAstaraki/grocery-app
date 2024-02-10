import "./itemAdder.scss";

export default function ItemAdder() {
  return (
    <div className="itemAdder">
      <label htmlFor="inputItem">Item</label>
      <input id="inputItem" type="text" />
      <button>Add</button>
    </div>
  );
}
