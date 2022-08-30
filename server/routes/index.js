const router = require('express').Router();
const { clientError, serverError, signUp } = require('../controllers');


router.use(clientError);
router.use(serverError);
module.exports = router;
