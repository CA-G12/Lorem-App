const router = require('express').Router();
const { verifyToken } = require('../jwt');

router.get('/pages/lorem/index.html', verifyToken, (req, res) => {
  console.log('firstttt')
  res.send('welcome to lorem ur access is allowed');
});

module.exports = router;
