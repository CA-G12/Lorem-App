const { signInQuery } = require('../database/queries');

const signIn = (req, res) => {
    const { email, password } = req.body;
    console.log('this is singin Controller:');
    signInQuery(email, password)
        .then(users => console.log('ROWS PROMISE:', users.rows))
        .catch(err => console.log(err));
};

module.exports = signIn;