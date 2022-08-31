const { join } = require('path');

const serverError = (err, req, res, next) => {
  console.log(err);
  res.status(500).sendFile(join(__dirname, '..', '..', 'public', 'errors', '500.html'));
};
module.exports = serverError;
