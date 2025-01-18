import React from "react";
import { ESModulesEvaluator } from "vite/module-runner";

const Footer = ({ items }) => {
  if (items.length == 0) {
    return (
      <div className="stats">
        <em>Start adding items to your packing list 🔥</em>
      </div>
    );
  }
  const numOfItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentItems = Math.round((packedItems / numOfItems) * 100);
  return (
    <div className="stats">
      {percentItems == 100 ? (
        <em>You got everything ready to go ✈</em>
      ) : (
        <em>
          💼 You have {numOfItems} items on your list, and you already packed{" "}
          {packedItems}({percentItems}%)
        </em>
      )}
    </div>
  );
};

export default Footer;
