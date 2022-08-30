const router = require('express').Router();
const { clientError, serverError } = require('../controllers');
const signInRouter = require('./sign-in');

router.use(signInRouter);
router.use(clientError);
router.use(serverError);

module.exports = router;
