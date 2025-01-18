import { useState } from "react";
import "./index.css";
import Logo from "./Components/logo";
import Form from "./Components/form";
import PackagingList from "./Components/packagingList";
import Item from "./Components/item";
import Footer from "./Components/footer";
function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleDoneItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearBtn() {
    const confirm = window.confirm("Are you want to delete everything");
    if (confirm) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        setItems={items}
        onDeleteItem={handleDeleteItems}
        onDoneItem={handleDoneItem}
        ClearItems={handleClearBtn}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
