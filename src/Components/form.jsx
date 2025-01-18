import { useState } from "react";

const Form = ({ onAddItems, onDoneItem }) => {
  const [description, setdescription] = useState("");
  const [quantity, setQuentity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, quantity, pack: false, id: Date.now() };

    onAddItems(newItem);
    setdescription("");
    setQuentity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? </h3>
      <select value={quantity} onChange={(e) => setQuentity(e.target.value)}>
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
        onChange={(e) => setdescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
