const router = require('express').Router();
const { deleteLorem } = require('../controllers');

router.delete('/deleteLorem/:id', deleteLorem);

module.exports = router;