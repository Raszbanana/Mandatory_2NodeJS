import { Router } from 'express';
import db from '../database/createConnection.js';

const itemsRouter = Router();

itemsRouter.get('/api/items', async (req, res) => {
  const items = await db.all('SELECT * FROM items;');
  console.log("Items were sent!")
  res.send(items);
});

itemsRouter.get('/api/items/:id', async (req, res) => {
  const id = req.params.id;
  const item = await db.get(`SELECT * FROM items WHERE id = ${id}`);

  res.send({ data: item });
});

itemsRouter.post('/api/items', async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const quantity = req.body.quantity;

  const { changes } = await db.run(
    `insert into items (name, description, price, quantity) VALUES ('${name}', '${description}', ${price}, ${quantity});`
  );

  res.send({ rowsAffected: changes });
});

itemsRouter.patch('/api/items/:id', async (req, res) => {
  const id = req.params.id;
  const newName = req.body.name;
  const newDescription = req.body.description;
  const newPrice = req.body.price;
  const newQuantity = req.body.quantity;

  const { changes } = await db.run(
    `UPDATE items SET name = '${newName}',
     description = '${newDescription}',
     price = ${newPrice},
     quantity = ${newQuantity} WHERE id = ${id};`
  );
  res.send({ rowsAffected: changes });
});

itemsRouter.delete('/api/items/:id', async (req, res) => {
  const id = req.params.id;

  const { changes } = await db.run(`DELETE FROM items WHERE id = ${id}`);

  res.send({ rowsAffected: changes });
});

export default itemsRouter;
