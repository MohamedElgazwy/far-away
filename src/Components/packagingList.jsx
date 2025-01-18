import Item from "./item";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "bag", quantity: 1, packed: true },
  { id: 4, description: "meat", quantity: 2, packed: true },
];
import React, { useState } from "react";
const PackagingList = ({ items, onDeleteItem, onDoneItem, ClearItems }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onDoneItem={onDoneItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description"> Sort by description</option>
          <option value="packed">Sort by packed ones</option>
        </select>
        <button onClick={ClearItems}>Clear List</button>
      </div>
    </div>
  );
};

export default PackagingList;
