import React, { useState } from 'react';

export default function ItemPayable({ listOfPeople, item, consolidatedPayersProps }) {
  const { itemName, itemPrice } = item;
  // To track & maintain the state of the currently selected person
  // in the dropdown
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [payers, setPayers] = useState([]);

  // Destructure methods from props
  const {
    consolidatedPayers,
    setConsolidatedPayers,
  } = consolidatedPayersProps;

  const handleOptionClick = (event) => {
    setSelectedPerson(event.target.value);
  };

  // sum of all the items consumed by a person
  const calcIndividualTotal = (person) => {
    const arrayOfAmtPayable = Object.values(person.consumedItems);
    const total = arrayOfAmtPayable.reduce((acc, currVal) => (acc + currVal), 0);
    return total;
  };
  // Return a boolean to see whether a person's consumed items and costs should be updated
  const checkValidToUpdatePayer = (person) => person.name === selectedPerson || Object.keys(person.consumedItems).includes(itemName);

  // Function that updates the list of consolidated payers
  const updatedListOfConsolPayers = () => {
    // Add the selectedPerson into consolidated payers list
    const getSelectedPerson = consolidatedPayers.filter((payer) => payer.name === selectedPerson);
    // Create a var to store the temp consolidated payers for the whole bill
    let newConsolidatedPayers;
    // if selected person does not exist, create a new one in the state
    if (getSelectedPerson.length === 0) {
      newConsolidatedPayers = [...consolidatedPayers,
        { name: selectedPerson, consumedItems: {}, total: 0 }];
    } else {
      newConsolidatedPayers = [...consolidatedPayers];
    }

    // Next update the items that specfic person is payable for
    const updatedConsolPayers = newConsolidatedPayers.map((payer) => {
      // If this person is the newly added/specific person
      if (checkValidToUpdatePayer(payer)) {
        // Make sure to update its consumedItems state, along side its previous state
        // Adding 1 to payers.length since it is always lagging by 1 due to this function
        // depending on the immediate update of setPayers (consider writing a promise)
        payer.consumedItems = { ...payer.consumedItems, [itemName]: Number((itemPrice / (payers.length + 1)).toFixed(2)) };
        payer.total = calcIndividualTotal(payer);
        return payer;
      }
      return payer;
    });
    return updatedConsolPayers;
  };

  const addPersonToItemList = () => {
    // First, set the payers for a particular item
    setPayers([...payers, selectedPerson]);

    // Second, perform update on the selected person's consumedItem list and individual totals in consolidatedPayers list
    setConsolidatedPayers(updatedListOfConsolPayers());
  };

  // Display a list of payers and the corresponding amt payable for said item
  const arrayOfPayers = (itemPrice) => {
    const individualPayable = (itemPrice / payers.length).toFixed(2);
    const payersDisplay = payers.map((payer) => (
      <div className="row d-flex flex-row justify-content-around">
        <div className="col text-center">
          {payer}
        </div>
        <div className="col text-center">
          $
          {individualPayable}
        </div>
      </div>

    ));
    return payersDisplay;
  };

  const arrayOfDebtors = listOfPeople.map((person) => (
    <option value={person}>
      {person}
    </option>
  ));
  return (
    <div className="container">
      <div className="row d-flex flex-row justify-content-center">
        <div className="col d-flex flex-column align-items-center bg-info">
          {itemName}
          <select value={selectedPerson} onChange={handleOptionClick}>
            {arrayOfDebtors}
          </select>
        </div>
        <div className="col d-flex flex-column align-items-center bg-info">
          <div>
            $
            {itemPrice}
          </div>
          <button type="submit" onClick={addPersonToItemList}>Add Person</button>
        </div>
      </div>
      <div className="text-center bg-light">Person List</div>
      {arrayOfPayers(itemPrice)}
    </div>
  );
}
