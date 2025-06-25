export default function Stats({ items }) {
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
