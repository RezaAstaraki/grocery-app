import "./items.scss";

export default function Items() {
  const itemsList = ["item1", "item2", "item3"];
  return (
    <div className="items">
      {itemsList.map((item, index) => {
        return (
          <div key={index} className="item">
            <div>{index + 1}</div>
            {item}
            <div>
              <span>ok</span>
              <button>X</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
