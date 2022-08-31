const router = require('express').Router();
const { clientError, serverError } = require('../controllers');
const signUpRouter = require('./sign-up');
const signInRouter = require('./sign-in');
const loremRouter = require('./lorem');

router.use(loremRouter);
router.use(signUpRouter);
router.use(signInRouter);
router.use(clientError);
router.use(serverError);

module.exports = router;
