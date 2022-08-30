const { join } = require('path');

const clientError = (req, res, next) => {
  res.status(404).sendFile(join(__dirname, '..', '..', 'public', 'errors', '404.html'));
};
module.exports = clientError;
