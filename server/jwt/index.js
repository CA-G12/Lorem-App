const jwt = require('jsonwebtoken');
require('env2')('.env');
const router = require('express').Router();
const clientError = require('../controllers');

const generateToken = (res, payload) => {
  jwt.sign(payload, process.env.SECRET_TOKEN, { algorithm: 'HS256' }, (err, token) => {
    if (err) {
      router.use(clientError);
    } else {
      res.cookie('token', token).send('Token saved');
    }
  });
};
// const verifyToken = () => {

// };
module.exports = { generateToken };
