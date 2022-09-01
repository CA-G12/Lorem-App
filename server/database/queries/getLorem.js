const connection = require('../config/connection');

const getLoremQuery = (userId) => connection.query({
  text: 'select * from lorem where userid = $1;',
  values: [userId],
});

module.exports = getLoremQuery;
