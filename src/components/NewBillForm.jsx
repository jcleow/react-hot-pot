import React, { useState } from 'react';
import axios from 'axios';
// Function that renders a new bill form
export default function NewBillForm({ setDisplayMainAppScreen }) {
// Maintain and set states
  const [billName, setBillName] = useState('');
  const handleNewBillInput = (event) => {
    setBillName(event.target.value);
  };

  const handleSubmitNewBill = () => {
    axios.post('/createBill', { billName })
      .then(() => {
        setDisplayMainAppScreen(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <input value={billName} onChange={handleNewBillInput} />
      <button type="submit" onClick={handleSubmitNewBill}>Submit</button>
    </div>
  );
}
