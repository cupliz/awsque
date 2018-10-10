const express = require('express');
const next = require('next');
const {NODE_ENV, APP_ENV} = process.env
const dev = NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

console.log(process.env)

function createServer() {
  const server = express();
  // add middleware, custom routing, whatever
  server.get('*', (req, res) => handle(req, res));
  return server;
}

if (APP_ENV=='production') {
  module.exports = createServer();
} else {
  app.prepare().then(() => {
    const server = createServer();
    server.listen(port);
  });
}