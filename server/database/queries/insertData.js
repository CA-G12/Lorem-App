const connection = require('../config/connection');

const insertDataQuery = ({ password, username, email }) => {
  const sql = {
    text: 'insert into users (username, email, password) values ($1, $2, $3);',
    values: [username, email, password],

  };
  return connection.query(sql);
};

module.exports = insertDataQuery;
