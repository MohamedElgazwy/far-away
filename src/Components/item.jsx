const Item = ({ item, onDeleteItem, onDoneItem }) => {
  return (
    <li className="flex items-center gap-3">
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onDoneItem(item.id)}
        className="w-5 h-5 accent-[#e5771f] cursor-pointer"
      />
      <span className={`text-xl ${item.packed ? "line-through" : ""}`}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => onDeleteItem(item.id)}
        className="text-xl cursor-pointer"
      >
        ❌
      </button>
    </li>
  );
};

export default Item;
