import express from 'express';
import verifyToken from './services/authorizationService.js';
import verifyLogin from './services/authenticationService.js';
import signup from './services/signupService.js'
// import path from 'path';
import jwt from 'jsonwebtoken';
import itemsRouter from './routers/itemsRouter.js';

const app = express();
app.use(express.json());

app.post('/api/signup', signup, (req, res) => {
  res.send({message: "Account created"})
}) 

app.post('/api/login', verifyLogin, (req, res) => {
  const email = req.body.email
  const user = { email: email };

  jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
    res.json({ token: token });
  });
});

app.use(verifyToken);
app.use(itemsRouter)

// app.use(express.static(path.resolve("../client/public")));

app.post('/api/post', (req, res) => {
  res.json({
    message: 'post created',
  });
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log('listening on ' + PORT);
});
