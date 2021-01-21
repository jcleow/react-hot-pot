import React from 'react';

export default function PersonInput({ props }) {
  const { personInput, handleNewPersonInput } = props;
  return (
    <div>
      <input
        value={personInput}
        onChange={handleNewPersonInput}
        placeholder="Enter Person Name"
      />
    </div>
  );
}
