import db from '../database/createConnection.js';

import bcrypt from 'bcrypt';
const saltRounds = 10;

function verifyLogin(req, res, next) {
  const email = "'" + req.body.email + "'";
  db.get(`SELECT * FROM users WHERE email = ${email}`)
    .then((user) => {
      const userPass = req.body.password;
      const userHash = user.hashedPassword;

      bcrypt.compare(userPass, userHash, function (err, result) {
        if (result) {
          next();
        }
      });
    })
    .catch((err) => {
      res.send({ message: 'password invalid' });
    });
}

export default verifyLogin;
