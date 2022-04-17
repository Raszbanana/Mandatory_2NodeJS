import express from 'express';
import cors from 'cors'
import verifyToken from './services/authorizationService.js';
import verifyLogin from './services/authenticationService.js';
import signup from './services/signupService.js'

// import path from 'path';
import jwt from 'jsonwebtoken';
import itemsRouter from './routers/itemsRouter.js';
const app = express();
app.use(express.json());
app.use(cors())

app.post('/api/signup', signup, (req, res) => {
  res.send({message: "Signup successful"})
}) 

app.post('/api/login', verifyLogin, (req, res) => {

  const email = req.body.email
  const user = { email: email };

  jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '12h' }, (err, token) => {
    res.json({auth: true, token: token });
  });
});

app.use(verifyToken);
app.use(itemsRouter)

// app.use(express.static(path.resolve("../client/public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log('listening on ' + PORT);
});
