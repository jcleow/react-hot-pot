import React, { useState } from 'react';
import NewBillForm from './components/NewBillForm.jsx';
import NewItemInputForm from './components/NewItemInputForm.jsx';
import ItemsList from './components/ItemsList.jsx';

export default function App() {
  // To track whether to display main screen or not
  const [displayMainAppScreen, setDisplayMainAppScreen] = useState(false);
  // To share the states of price (of an Item), personInput and itemInput
  const [priceInput, setPriceInput] = useState('');
  const [personInput, setPersonInput] = useState('');
  const [itemInput, setItemInput] = useState({ itemName: '', itemPrice: 0 });

  // To track all relevant names and items in this current bill form
  const [listOfPeople, setListOfPeople] = useState(['Person Drop Down']);
  const [listOfItems, setListOfItems] = useState([]);

  const itemInputFormProps = {
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
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center">

          {!displayMainAppScreen
          && (
          <NewBillForm
            setDisplayMainAppScreen={setDisplayMainAppScreen}
          />
          )}

          {displayMainAppScreen
          && <NewItemInputForm itemInputFormProps={itemInputFormProps} />}
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          {displayMainAppScreen
        && (
        <ItemsList
          listOfPeople={listOfPeople}
          listOfItems={listOfItems}
          priceInput={priceInput}
        />
        )}
        </div>
      </div>
    </div>
  );
}
