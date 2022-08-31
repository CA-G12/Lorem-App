const router = require('express').Router();
const { getLorem } = require('../controllers');

router.get('/getLorem', getLorem);

module.exports = router;
