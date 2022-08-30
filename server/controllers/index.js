const serverError = require('./500');
const clientError = require('./404');
const signIn = require('./signIn');

module.exports = { serverError, clientError, signIn }