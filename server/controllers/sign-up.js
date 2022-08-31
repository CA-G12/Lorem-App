const bcrypt = require('bcrypt');
const joi = require('joi');
const { insertDataQuery } = require('../database/queries');

const hashPassword = (password) => bcrypt.hash(password, 10);

const signUp = (req, res) => {
  const schema = joi.object({
    username: joi.string().required(),
    password: joi.string().required().min(4),
    email: joi.string().email({ separator: '.', minDomainSegments: 2 }).required(),
  });

  schema.validateAsync(req.body)
    .then((data) => hashPassword(data.password))
    .then((hashedPassword) => (insertDataQuery({
      password: hashedPassword,
      username: req.body.username,
      email: req.body.email,
    })))

    .catch((err) => res.send(err));
};

module.exports = signUp;
