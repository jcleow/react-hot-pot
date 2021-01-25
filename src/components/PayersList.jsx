import React from 'react';

export default function PayersList({ consolidatedPayers }) {
  const consolidatedPayersDisplay = consolidatedPayers.map((payer) => (
    <div>
      <div className="row">
        <div className="col d-flex flex-column align-items-center">
          {payer.name}
        </div>
        <div className="col d-flex flex-column align-items-center">
          $
          {payer.total}
        </div>
      </div>
    </div>
  ));
  const grandTotal = () => {
    const individualSubtotalsArray = consolidatedPayers.map((payer) => payer.total);
    const sumOfSubTotals = individualSubtotalsArray.reduce((acc, currVal) => acc + currVal, 0);
    return sumOfSubTotals;
  };
  return (
    <div className="container bg-light">
      <div className="text-center bg-warning">
        List of Payers
      </div>
      <div className="row">
        <div className="col d-flex flex-column align-items-center">
          {consolidatedPayersDisplay}
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <b>
            Grand Total: $
            {grandTotal()}
          </b>
        </div>
      </div>
    </div>
  );
}
