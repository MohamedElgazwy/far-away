import { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form
      className="bg-[#e5771f] py-8 flex flex-col items-center gap-2"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center justify-center pb-6">
        <h3 className="text-2xl mr-4">What do you need for your trip?</h3>
      </div>
      <div className="md:flex items-center justify-center gap-2">
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="bg-[#ffebb3] text-[#5a3e2b] rounded-full px-4 py-2 font-bold cursor-pointer mr-1 md:mr-0"
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-[#ffebb3] text-[#5a3e2b] rounded-full px-4 py-2 font-bold placeholder-[#5a3e2b]"
        />
        <div className="">
          <button className="bg-[#76c7ad] text-[#5a3e2b] rounded-full mt-4 md:mt-0 px-4 py-2 font-bold uppercase w-full">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
