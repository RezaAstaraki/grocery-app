import "./items.scss";

export default function Items({ items, handleStatus, removeItem }) {
  // const itemsList = ["item1", "item2", "item3"];
  return (
    <div className="items">
      {items.map((item, index) => {
        return (
          <div
            key={item.id}
            className={item.status === "done" ? "item done" : "item pending"}
            // onClick={() => handleStatus(item)}
            onClick={(event) => handleStatus(item, event)}
          >
            <div>{index + 1}</div>
            {item.content}
            <div>
              <span>ok</span>
              <button onClick={() => removeItem(item)}>X</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
