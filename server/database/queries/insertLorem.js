const connection = require('../config/connection');

const insertLoremQuery = (content, userId) => connection.query({
  text: 'insert into lorem (content, userid) values ($1, $2)',
  values: [content, userId],
});

module.exports = insertLoremQuery;
