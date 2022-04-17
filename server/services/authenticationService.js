import db from '../database/createConnection.js';

import bcrypt from 'bcrypt';
const saltRounds = 10;

function verifyLogin(req, res, next) {
  const email = "'" + req.body.email + "'";
  console.log("A login was attempted")
  db.get(`SELECT * FROM users WHERE email = ${email}`)
    .then((user) => {

      const userPass = req.body.password;
      const userHash = user.hashedPassword;

      bcrypt.compare(userPass, userHash, function (_err, result) {
        if (result) {
          console.log("Login was granted")
          next();
        } else {
          res.json({message: false})
          // res.status(401).send('Password invalid');
        }
      });
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send('somethingwentwrong');
    });
}

export default verifyLogin;
