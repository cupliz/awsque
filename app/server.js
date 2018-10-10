const express = require('express');
const next = require('next');
const {NODE_ENV, IN_LAMBDA} = process.env
const dev = NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

function createServer() {
  const server = express();
  server.get('*', (req, res) => handle(req, res));
  return server;
}

if (IN_LAMBDA) {
  module.exports = createServer();
} else {
  app.prepare().then(() => {
    const server = createServer();
    server.listen(port);
  });
}