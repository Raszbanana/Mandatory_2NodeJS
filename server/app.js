import express from 'express';
import path from 'path';
import db from './database/connectToMongoDB.js';
import Item from './models/item.js';

const app = express();

app.use(express.json());
// app.use(express.static(path.resolve("../client/public")));

app.get('/', (req, res) => {
  Item.find({}, function (err, items) {
    if (err) {
      console.log(err);
    } else {
      res.send({ data: items });
    }
  });
});

app.post('/', (req, res) => {
  let item = new Item();
  item.name = req.body.name;
  item.description = req.body.description;
  item.price = req.body.price;

  item.save(function(err){
    if (err) {
        res.send({message: "404"});
      } else {
        res.send({message: "200" });
      }
  });

});

const PORT = process.env.PORT || 3001;
app.listen(PORT, (req, res) => {
  console.log('listening on ' + PORT);
});
