import { useState } from "react";
import "./App.css";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }
  function handleCheckbox(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packing: !item.packing } : item
      )
    );
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <Packing
        items={items}
        onDeleteItem={handleDeleteItem}
        onCheckbox={handleCheckbox}
      />
      <Stats items={items} />
    </div>
  );
}

function Packing({ items, onDeleteItem, onCheckbox }) {
  return (
    <div className="packing">
      <ul>
        {items.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onCheckbox={onCheckbox}
            />
          );
        })}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onCheckbox }) {
  return (
    <li>
      <span>
        <input
          type="checkbox"
          value={item.packing}
          onChange={() => onCheckbox(item.id)}
        />
      </span>
      <span style={item.packing ? { textDecoration: "line-through" } : {}}>
        {item.name}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length)
    return <div className="footer">start add some item for your travel</div>;

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packing).length;
  const percent = Math.round((packedItems / numItems) * 100);

  return (
    <div className="footer">
      {percent === 100
        ? "you got everything now time to go. "
        : `you have ${numItems} on your list, and you already packed ${packedItems} (
      ${percent}% )`}
    </div>
  );
}

function Logo() {
  return (
    <div className="header">
      <h1>logo travel</h1>
    </div>
  );
}

function Form({ onAddItems }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;

    const newItem = { name, quantity, packing: false, id: Date.now() };
    onAddItems(newItem);

    setName("");
    setQuantity(1);
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      what do you need for your trip ?
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="Name.."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>add</button>
    </form>
  );
}
