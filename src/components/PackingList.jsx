import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onToggleItem, onClearItem }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortItem;
  if (sortBy === "input") sortItem = items;
  else if (sortBy === "description")
    sortItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else {
    sortItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  const handleClearList = () => {
    const confirm = window.confirm(
      "Are you sure, you want to clear item list ?"
    );
    if (confirm) onClearItem([]);
  };
  return (
    <div className="list">
      <ul>
        {sortItem.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actives">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by descriptions</option>
          <option value="packed">Sort by packed items</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
