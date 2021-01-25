import { resolve } from 'path';
import db from './models/index.mjs';
import bills from './controllers/bills.mjs';

export default function routes(app) {
  // special JS page. Include the webpack index.html file
  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });

  const BillsController = bills(db);
  app.post('/createBill', BillsController.create);
  app.put('/bill/:billId', BillsController.update);
}
