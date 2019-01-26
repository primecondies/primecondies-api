const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config/config');
const router = require('../src/api/routes');

const app = express();
const port = config.api.port || 3000;

// Initialze mongodb database
config.mongo.init();

// Initialize passport
app.use(passport.initialize());

// Use the api router for api requests
app.use('/api', router);

// Handle errors
app.use((req, res) => {
  res.status(404);
  res.json({ 
    statusCode: '404',
    message: 'Resource not found' 
  });
});

app.listen(port, () => {
  console.log(`Prime Condies Started on port ${port}`);
});

module.exports = app;