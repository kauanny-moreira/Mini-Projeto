const express = require('express');
const app = express();
const port = 3000;

const routes = require('./route');

app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
