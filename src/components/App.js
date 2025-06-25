import { useState } from "react";
import Logo from "./Logo";
import Stats from "./Stats";
import Packing from "./Packing";
import Form from "./Form";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }
  function handleClearList() {
    setItems([]);
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
        onClearList={handleClearList}
        onDeleteItem={handleDeleteItem}
        onCheckbox={handleCheckbox}
      />
      <Stats items={items} />
    </div>
  );
}
