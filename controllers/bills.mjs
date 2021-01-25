import axios from 'axios';

export default function bills(db) {
  const index = () => {
  };

  const create = async (req, res) => {
    const newBill = await db.Bill.create({
      name: req.body.billName,
    });
    res.send({ message: 'created', name: req.body.billName, billId: newBill.id });
  };

  const update = async (req, res) => {
    const { priceInput: totalAmt, personInput: personName, billId } = req.body.newBillDetails;

    // Search for the currently selected bill
    const selectedBill = await db.Bill.findByPk(billId);
    selectedBill.total = totalAmt;
    await selectedBill.save();

    // Update who this owes this amount in the bill
    const selectedPerson = await db.Person.create({
      name: personName,
    });

    // Create a new entry for this person in the 'People' table
    await selectedBill.setPeople(selectedPerson);

    res.send({ message: 'updated' });
  };

  return {
    index,
    create,
    update,
  };
}
