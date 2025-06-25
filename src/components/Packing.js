import { useState } from "react";
import Item from "./Item";

export default function Packing({
  items,
  onDeleteItem,
  onCheckbox,
  onClearList,
}) {
  const [sortBy, SetSortBy] = useState("input");

  let sortItems;

  if (sortBy === "input") sortItems = items;

  if (sortBy === "name")
    sortItems = items.sort((a, b) => a.name.localeCompare(b.name));

  if (sortBy === "packed")
    sortItems = items.sort((a, b) => Number(a.packing) - Number(b.packing));

  return (
    <div className="packing">
      <ul>
        {sortItems.map((item) => {
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
      <div>
        <select onChange={(e) => SetSortBy(e.target.value)}>
          <option value="input">sort by item</option>
          <option value="name">sort by name</option>
          <option value="packed">sort by packed</option>
        </select>
        <button onClick={() => onClearList()}>Clear list</button>
      </div>
    </div>
  );
}
