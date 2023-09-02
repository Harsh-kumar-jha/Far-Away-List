import React from "react";

const Stats = ({ items }) => {
  if (items.length === 0)
    return (
      <footer className="stats">
        <em>Start adding items to your list...✈️</em>
      </footer>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const packedPercent = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      {packedPercent === 100 ? (
        <em>You got everything you need for the trip ... lets go...🫡</em>
      ) : (
        <em>
          You have {numItems} items to pack and you have already packed{" "}
          {packedItems} ({packedPercent}%) items
        </em>
      )}
    </footer>
  );
};

export default Stats;
