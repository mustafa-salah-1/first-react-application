import { useState } from "react";

export default function Form({ onAddItems }) {
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
