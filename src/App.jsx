import React, { useState } from 'react';
import NewBillForm from './components/NewBillForm.jsx';
import NewItemInputForm from './components/NewItemInputForm.jsx';
import ItemPayable from './components/ItemPayable.jsx';
import PayersList from './components/PayersList.jsx';

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

  // To track all the items and amt payables for each person
  const [consolidatedPayers, setConsolidatedPayers] = useState([]);

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

  const consolidatedPayersProps = {
    consolidatedPayers,
    setConsolidatedPayers,
  };

  const itemsListDisplay = listOfItems.map((item) => (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <ItemPayable
            listOfPeople={listOfPeople}
            item={item}
            consolidatedPayersProps={consolidatedPayersProps}
          />
        </div>
      </div>
    </div>
  ));

  return (
    <div>
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
      </div>
      {itemsListDisplay}
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            {displayMainAppScreen
            && <PayersList consolidatedPayers={consolidatedPayers} />}
          </div>
        </div>
      </div>
    </div>
  );
}
