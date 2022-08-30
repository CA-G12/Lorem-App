const connection = require('../config/connection');

const signInQuery = (email, password) => {
    console.log('in query:', email, password);
    return connection.query(`SELECT * FROM users where email='${email}'`);
};

module.exports = signInQuery;

