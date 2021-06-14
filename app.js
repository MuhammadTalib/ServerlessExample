const serverless = require('serverless-http');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.handler = serverless(app);

