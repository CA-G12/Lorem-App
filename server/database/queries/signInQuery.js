const connection = require('../config/connection');

const signInQuery = (email, password) => {
    return connection.query('select * from users');
};

module.exports = signInQuery;

