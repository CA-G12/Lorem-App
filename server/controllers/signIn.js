const joi = require('joi');
const bcrypt = require('bcrypt');
const { signInQuery } = require('../database/queries');

const signInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

const signIn = (req, res) => {
  // validate user info
  const { error } = signInSchema.validate(req.body, { abortEarly: false });
  if (error) {
    if (error.details.length > 1) {
      res.status(400).json(`1:${error.details[0].message} 2:${error.details[1].message}`);
    } else {
      res.status(400).json(error.details[0].message);
    }
  }

  // check user info on database
  const { email, password } = req.body;
  signInQuery(email, password)
    .then((users) => {
      // check email
      const existedEmail = !!users.rows[0];
      if (existedEmail === false) return res.status(401).json({ ERROR: 'Email is not valid!' });

      // check password
      return bcrypt.compare(password, users.rows[0].password);
    })
    .then((pass) => {
      if (!pass) return res.status(401).json({ ERROR: 'Password is not valid!' });
      console.log('screw eslent');  
      // create token
    })
    .catch((err) => console.log(err));
};

module.exports = signIn;
