const router = require('express').Router();
const { clientError, serverError , insertLorem, getLorem } = require('../controllers');
const signUpRouter = require('./sign-up');
const signInRouter = require('./sign-in');
const loremRouter = require('./lorem');
const getLoremRouter = require('./getLorem');
const { verifyToken } = require('../jwt');

router.use('/insertLorem',verifyToken, insertLorem);

router.use(getLoremRouter);
router.use(loremRouter);
router.use(signUpRouter);
router.use(signInRouter);
router.use(clientError);
router.use(serverError);

module.exports = router;
