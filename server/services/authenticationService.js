import db from '../database/createConnection.js';

import bcrypt from 'bcrypt';
const saltRounds = 10;

// db.run("insert into users (name, email, hashedPassword) VALUES ('admin', 'test@gmail.com', '$2b$10$BxBtG6vhs9FEllELzpqq4.u9avR617GAfzAzs65IB81byX9OZI092')")

function verifyLogin(req, res, next) {
  const email = "'" + req.body.email + "'";
  const user = db.get(`SELECT * FROM users WHERE email = ${email}`);

  const userPass = req.body.password;
  const userHash = user.hashedPassword;

  bcrypt.compare(userPass, userHash, function (err, result) {
    if (result) {
      next();
    } else {
      res.send({ message: 'password invalid' });
    }
  });
}

export default verifyLogin;
