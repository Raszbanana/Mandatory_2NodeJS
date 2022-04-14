import db from '../database/createConnection.js';

import bcrypt from 'bcrypt';
const saltRounds = 10;

function signup(req, res, next) {
  const email = "'" + req.body.email + "'";

  const reqUser = {
    name: req.body.name,
    email: email,
    password: req.body.password,
  };

  bcrypt.hash(reqUser.password, saltRounds, function (err, hash) {
    const userHash = hash;
    let userMail;
    db.get(`SELECT * FROM users WHERE email = ${email}`)
      .then((user) => {
        userMail = user.email;
        if (userMail === req.body.email) {
          res.send({ message: 'User already exists' });
        }
      })
      .catch((error) => {
        console.log(userHash);
        db.run(
          `insert into users (name, email, hashedPassword) VALUES ('${reqUser.name}', ${reqUser.email}, '${userHash}');`
        );
        next();
      });
  });
}

export default signup;
