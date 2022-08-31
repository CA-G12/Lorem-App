const router = require('express').Router();
const { verifyToken } = require('../jwt');

router.get('/pages/lorem/index', verifyToken, (req, res) => {
  res.send('welcome to lorem ur access is allowed');
});

module.exports = router;
