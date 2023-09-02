import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);
  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleTogglePacked = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDelete}
        onToggleItem={handleTogglePacked}
        onClearItem={setItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
