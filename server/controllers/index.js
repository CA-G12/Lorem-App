const serverError = require('./500');
const clientError = require('./404');
const signUp = require('./sign-up');
const signIn = require('./signIn');
const insertLorem = require('./insertLorem');
const getLorem = require('./getLorem');
const deleteLorem = require('./deleteLorem');

module.exports = { serverError, clientError, signIn, signUp, insertLorem, getLorem, deleteLorem };
