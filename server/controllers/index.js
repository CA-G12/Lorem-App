const serverError = require('./500');
const clientError = require('./404');
const signUp = require('./sign-up');
const signIn = require('./signIn');

module.exports = { serverError, clientError, signIn, signUp };
