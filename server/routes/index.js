const router = require('express').Router();
const { clientError, serverError } = require('../controllers');
const signUpRouter = require('./sign-up');

router.use(signUpRouter);
router.use(clientError);
router.use(serverError);
module.exports = router;
