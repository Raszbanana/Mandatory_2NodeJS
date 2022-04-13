import express from 'express';
// import path from 'path';

import itemsRouter from './routers/itemsRouter.js'

const app = express();

app.use(express.json(), itemsRouter);
// app.use(express.static(path.resolve("../client/public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log('listening on ' + PORT);
});
