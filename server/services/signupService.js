import db from '../database/createConnection.js';

import bcrypt from 'bcrypt';
const saltRounds = 10;

function signup(req, res, next) {
  const email = "'" + req.body.email + "'";
  const user = {
    name: req.body.name,
    email: email,
    password: req.body.password,
  };

  bcrypt.hash(user.password, saltRounds, function (err, hash) {
    const userHash = hash;
    const { changes } = db.run(
        `insert into users (name, email, hashedPassword) VALUES ('${user.name}', ${user.email}, '${userHash}');`
      );
    res.send({message: "Signup succesfull"})
  });
}

export default signup;
