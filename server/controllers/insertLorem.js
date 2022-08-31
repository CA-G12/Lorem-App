const jwt = require('jsonwebtoken');
const { insertLoremQuery } = require('../database/queries');

const insertLorem = (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
    const content = req.body.loremData;
    insertLoremQuery(content, decoded.id).then((data) => {
      res.redirect('/');
    });
  });
};
module.exports = insertLorem;
