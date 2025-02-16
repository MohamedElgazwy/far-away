import { useState } from "react";
import Item from "./item";

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
    <div className="bg-[#5a3e2b] text-[#ffebb3] py-8 flex flex-col items-center gap-8">
      <ul className="w-4/5 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onDoneItem={onDoneItem}
          />
        ))}
      </ul>
      <div className="flex gap-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-[#ffebb3] text-[#5a3e2b] rounded-full px-4 py-2 font-bold cursor-pointer"
        >
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed ones</option>
        </select>
        <button
          onClick={ClearItems}
          className="bg-[#ffebb3] text-[#5a3e2b] rounded-full px-4 py-2 font-bold uppercase"
        >
          Clear List
        </button>
      </div>
    </div>
  );
};

export default PackagingList;
