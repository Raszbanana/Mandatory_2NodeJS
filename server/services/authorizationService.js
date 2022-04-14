import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';


function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
  
    if (typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      req.token = bearerToken;
      jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
        if (err) {
          res.sendStatus(403);
        } else {
          next();
        }
      });
    }
  }

export default verifyToken;