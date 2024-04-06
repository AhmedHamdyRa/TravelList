import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setitems] = useState([]);

  function handleNewItems(newItem) {
    setitems((items) => [...items, newItem]);
  }

  function handleDeleteItems(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to delete items");
    if (confirmed) setitems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form addNewItem={handleNewItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
