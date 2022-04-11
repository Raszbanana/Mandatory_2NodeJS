import mongoose from 'mongoose';


mongoose.connect('mongodb://localhost:27017/keashop', {
    useNewUrlParser: "true",
})

let db = mongoose.connection;

db.on("error", err => {
    console.log("err", err)
  })

db.on("connected", (_err) => {
    console.log("mongoose is connected")
  })

export default db;


