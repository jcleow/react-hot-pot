import React from 'react';

export default function ItemInput({ props }) {
  const { itemInput, handleNewItemInput } = props;
  return (
    <div>
      <input
        value={itemInput.itemName}
        onChange={handleNewItemInput}
        placeholder="Enter name of Item"
      />
    </div>
  );
}
