'use strict';

const express = require('express');
//define functionality
const app = express();

let db = [];

app.use(express.json());

// Route to Get All Categories
app.get('/categories', (request, response, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results });
});

//////
app.get('/newroute', (request, response, next) => {
  response.send('Now youve hit it')
});
/////

// Route to Create a Category
app.post('/categories', (request, response, next) => {
  let record = req.body;
  record.id = Math.random();
  db.push(record);
  res.json(record);
});

let PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));


