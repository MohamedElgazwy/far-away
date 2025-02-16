const Footer = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="bg-[#76c7ad] text-center py-8">
        <em className="text-xl">Start adding items to your packing list 🔥</em>
      </div>
    );
  }

  const numOfItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentItems = Math.round((packedItems / numOfItems) * 100);

  return (
    <div className="bg-[#76c7ad] text-center py-8">
      {percentItems === 100 ? (
        <em className="text-xl">You got everything ready to go ✈</em>
      ) : (
        <em className="text-xl">
          💼 You have {numOfItems} items on your list, and you already packed{" "}
          {packedItems} ({percentItems}%)
        </em>
      )}
    </div>
  );
};

export default Footer;
