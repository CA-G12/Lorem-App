const jwt = require('jsonwebtoken');
require('env2')('.env');
const router = require('express').Router();
const clientError = require('../controllers');

const generateToken = (res, payload, path) => {
  jwt.sign(payload, process.env.SECRET_TOKEN, { algorithm: 'HS256' }, (err, token) => {
    console.log(token);
    if (err) {
      router.use(clientError);
    } else {
      res.cookie('token', token).redirect(`${path}`);
    }
  });
};
// const verifyToken = () => {

// };
generateToken({ name: 'bak' });
module.exports = { generateToken };
