export default function Item({ item, onDeleteItem, onCheckbox }) {
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
        {item.quantity}
        <span> </span>
        {item.name}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
