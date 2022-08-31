const bcrypt = require('bcrypt');
const joi = require('joi');
const { insertDataQuery, signInQuery } = require('../database/queries');
const { generateToken } = require('../jwt');

const hashPassword = (password) => bcrypt.hash(password, 10);

const signUp = (req, res) => {
  const schema = joi.object({
    username: joi.string().required(),
    password: joi.string().required().min(4),
    email: joi.string().email({ separator: '.', minDomainSegments: 2 }).required(),
  });

  schema.validateAsync(req.body)
    .then((data) => hashPassword(data.password))
    .then((hashedPassword) => insertDataQuery({
      password: hashedPassword,
      username: req.body.username,
      email: req.body.email,
    }))
    .then((result) => signInQuery(req.body.email, req.body.password))
    .then((userData) => {
      generateToken(res, { username: req.body.username,id: userData.rows[0].id });
    })
    .catch((err) => res.send(err));
};

module.exports = signUp;
