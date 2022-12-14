const joi = require('joi');
const bcrypt = require('bcrypt');
const { generateToken, verifyToken } = require('../jwt');
const { signInQuery } = require('../database/queries');

const signInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(4).required(),
});

const signIn = (req, res) => {
  // validate user info
  const { error } = signInSchema.validate(req.body, { abortEarly: false });
  if (error) {
    if (error.details.length > 1) {
      return res.status(400).json(`1:${error.details[0].message}, 2:${error.details[1].message}`);
    } else {
      return res.status(400).json(error.details[0].message);
    }
  }

  // check user info on database
  const { email, password } = req.body;
  signInQuery(email)
    .then((users) => {
      // check email
      if (users.rows.length === 0) return res.status(401).json({ ERROR: 'Email is not found!' });

      // check password
      return bcrypt.compare(password, users.rows[0].password);
    })
    .then((validPassword) => {
      if (!validPassword) return res.status(401).json({ ERROR: 'Incorrect Password!' });

      // create token
      return signInQuery(email);
    }).then((user) => {
      const { username, id } = user.rows[0];
      generateToken(res, { username, id });
    })
    .catch((err) => res.status(401).json({ ERROR: 'Internal server error' }));
};

module.exports = signIn;
