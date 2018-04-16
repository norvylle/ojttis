	'use strict'

const express = require('express');
const app = express();
const router = require(__dirname + '/router');
const bodyParser = require('body-parser');

/*app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  res.setHeader('Cache-Control', 'no-cache');
  next();
});*/

app.use(bodyParser.json());
app.use(require('method-override')());
app.use(require('cors')());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router(express.Router()));

app.get('/', (req, res) => {
  res.send('API is working!');
});

app.listen(3001, (err) => {
  if (err) { console.log(err); }
  else { console.log('\nserver is running at http://localhost:3001'); }
});