import React, { useState } from 'react';

export default function ItemsList({ listOfPeople, listOfItems, priceInput }) {
  // To track & maintain the state of the currently selected person
  // in the dropdown
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (event) => {
    setSelectedOption(event.target.value);
  };

  const arrayOfDebtors = listOfPeople.map((person, index) => (
    <option value={person}>
      {person}
    </option>
  ));
  return (
    <div className="container">
      <div className="row d-flex flex-row justify-content-center">
        <div className="col d-flex flex-column align-items-center ">
          <div>{listOfItems.length > 0 && listOfItems[listOfItems.length - 1].itemName}</div>
          <select value={selectedOption} onChange={handleOptionClick}>
            {arrayOfDebtors}
          </select>
        </div>
        <div className="col d-flex flex-column align-items-center">
          <div>{listOfItems.length > 0 && listOfItems[listOfItems.length - 1].itemPrice}</div>
          <button type="submit">Add Person</button>
        </div>
      </div>
    </div>
  );
}
