const jwt = require('jsonwebtoken');
const { getLoremQuery } = require('../database/queries');

const getLorem = (req, res) => {
  jwt.verify(req.cookies.token, process.env.SECRET_TOKEN, (err, decoded) => {
    if (err) {
      res.status(400).send('Token invalid');
    } else {
      getLoremQuery(decoded.id).then((userData) => res.send(userData.rows))
    }
  });
};

module.exports = getLorem;
