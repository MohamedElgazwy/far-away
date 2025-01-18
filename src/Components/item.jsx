export default function Item({ item, onDeleteItem, onDoneItem }) {
  return (
    <li>
      <input
        type="checkBox"
        value={item.packed}
        onChange={() => onDoneItem(item.id)}
      />
      <span
        style={item.packed == true ? { textDecoration: "line-through" } : {}}
      >
        {item.description} {item.quantity}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
