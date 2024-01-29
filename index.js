require('dotenv').config();
const express = require('express');
const router = require('./app/router')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(router);

app.listen(PORT, () => {
  console.log(`Listen on http://localhost:${PORT}`);
});

