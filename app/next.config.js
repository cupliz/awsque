require('dotenv').config()
const path = require('path')
const withSASS = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const Dotenv = require('dotenv-webpack')

module.exports = withCSS(withSASS({
  webpack: (config) => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    return config
  }
}))