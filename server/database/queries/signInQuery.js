const connection = require('../config/connection');

const signInQuery = (email) => {
  return connection.query(`SELECT * FROM users where email='${email}'`);
};

module.exports = signInQuery;
