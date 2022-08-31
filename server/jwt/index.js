const jwt = require('jsonwebtoken');
require('env2')('.env');
const router = require('express').Router();
const clientError = require('../controllers');

const generateToken = (res, payload) => {
  jwt.sign(payload, process.env.SECRET_TOKEN, { algorithm: 'HS256' }, (err, token) => {
    if (err) {
      res.status(401).send('Error');
    } else {
      res.cookie('token', token).send('Token saved');
    }
  });
};
const verifyToken = (req, res, next) => {
  const recivedToken = req.cookies.token;
  if (!recivedToken) res.status(400).send('Access Denied');
  jwt.verify(recivedToken, process.env.SECRET_TOKEN, (err, decoded) => {
    if (err) {
      res.status(400).send('Token invalid');
    } else {
      res.cookie('username', decoded.username);
      res.cookie('userId:', decoded.id);
      next();
    }
  });
};

module.exports = { generateToken, verifyToken };

