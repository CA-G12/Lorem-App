const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const router = require('./routes');

const app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(cookieParser());

app.use(express.static(join(__dirname, '..', 'public')));
app.get('/lorem', (req, res) => {
  res.sendFile(join(__dirname, '..', 'public', 'pages', 'lorem', 'index.html'));
});
app.use(router);
module.exports = app;
