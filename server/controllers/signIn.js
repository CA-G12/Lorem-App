const joi = require('joi');
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

    //

    // signInQuery(email, password)
    //     .then(users => console.log('ROWS PROMISE:', users.rows))
    //     .catch(err => console.log(err));
};

module.exports = signIn;