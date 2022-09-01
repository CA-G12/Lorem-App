const connection = require('../config/connection');

const deleteLoremQuery = (loremId) => connection.query('delete from lorem where id = ($1);', [loremId]);
module.exports = deleteLoremQuery;