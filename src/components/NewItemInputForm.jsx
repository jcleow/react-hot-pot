import React, { useState } from 'react';
import PersonInput from './PersonInput.jsx';
import PriceInput from './PriceInput.jsx';
import ItemInput from './ItemInput.jsx';

const SubmitPersonBtn = ({ handleAddPersonToBill }) => (
  <div>
    <button type="submit" onClick={handleAddPersonToBill}>Submit</button>
  </div>
);

function SubmitItemBtn({ handleAddItemToBill }) {
  return (
    <button type="submit" onClick={handleAddItemToBill}>Submit</button>
  );
}
export default function NewItemInputForm({ itemInputFormProps }) {
  const {
    priceInput,
    personInput,
    itemInput,
    listOfPeople,
    listOfItems,
    setItemInput,
    setPriceInput,
    setPersonInput,
    setListOfPeople,
    setListOfItems,
  } = itemInputFormProps;

  console.log(listOfPeople, 'listOfPeople');

  const handleNewItemInput = (event) => {
    const currItemPrice = priceInput;
    setItemInput({ itemName: event.target.value, itemPrice: currItemPrice });
  };

  const handleNewPriceInput = (event) => {
    const currItemInput = itemInput;
    setPriceInput(Number(event.target.value));
    setItemInput({ ...currItemInput, itemPrice: (Number(event.target.value)) });
    console.log(currItemInput, 'currItemInput');
  };

  const handleNewPersonInput = (event) => {
    setPersonInput(event.target.value);
  };

  const handleAddPersonToBill = () => {
    setListOfPeople([...listOfPeople, personInput]);
  };

  const handleAddItemToList = () => {
    setListOfItems([...listOfItems, itemInput]);
  };

  // Props to be passed down to priceInput component
  const priceInputProps = { priceInput, handleNewPriceInput };
  // Props to be passed down to personInput component
  const personInputProps = { personInput, handleNewPersonInput };
  // Props to be passed down to the itemInput component
  const itemInputProps = { itemInput, priceInput, handleNewItemInput };

  return (
    <div>
      <ItemInput props={itemInputProps} />
      <PriceInput props={priceInputProps} />
      <SubmitItemBtn handleAddItemToBill={handleAddItemToList} />
      <PersonInput props={personInputProps} />
      <SubmitPersonBtn handleAddPersonToBill={handleAddPersonToBill} />
    </div>
  );
}
