const express = require('express')
const next = require('next')
const {NODE_ENV, IN_LAMBDA, PORT} = process.env

const port = parseInt(PORT, 10) || 3000
const dev = NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const createServer = () => {
  const server = express()
  // server.use(compression())
  server.get('*', (req, res) => handle(req, res))
  return server
}

const server = createServer()

if (!IN_LAMBDA) {
  app.prepare()
    .then(() => {
      server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
      })
    })
}

exports.app = app
exports.server = server