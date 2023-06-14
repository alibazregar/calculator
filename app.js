const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

module.exports = app