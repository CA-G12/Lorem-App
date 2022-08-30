const bcrypt = require('bcrypt');
const joi = require('joi');
const { insertDataQuery } = require('../database/queries');

const hashPassword = (password) => bcrypt.hashSync(password, 10);

const signUp = (req, res) => {
  const schema = joi.object({
    username: joi.string().required(),
    password: joi.string().required().min(4),
    email: joi.string().email({ separator: '.', minDomainSegments: 2 }).required(),
  });

  schema.validateAsync(req.body)
    .then((data) => insertDataQuery({
      password: hashPassword(data.password),
      username: data.username,
      email: data.email,
    }))
    .catch((err) => res.send(err));
};

module.exports = signUp;
