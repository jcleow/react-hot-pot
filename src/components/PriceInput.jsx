import React from 'react';

export default function PriceInput({ props }) {
  const { priceInput, handleNewPriceInput } = props;
  return (
    <div>
      <input
        value={priceInput}
        onChange={handleNewPriceInput}
        placeholder="Enter Price"
        type="Number"
        step="0.01"
        min="0.01"
      />
    </div>
  );
}
