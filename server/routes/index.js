const router = require('express').Router();
const { clientError, serverError , insertLorem, getLorem } = require('../controllers');
const { verifyToken } = require('../jwt');
const signUpRouter = require('./sign-up');
const signInRouter = require('./sign-in');
const loremRouter = require('./lorem');
const getLoremRouter = require('./getLorem');
const deleteLoremRouter = require('./deleteLorem');

router.use('/insertLorem',verifyToken, insertLorem);

router.use(getLoremRouter);
router.use(deleteLoremRouter);
router.use(loremRouter);
router.use(signUpRouter);
router.use(signInRouter);
router.use(clientError);
router.use(serverError);

module.exports = router;
