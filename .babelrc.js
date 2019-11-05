const env = require('./config')

module.exports = {
  presets: ['next/babel'],
  plugins: [['transform-define', env]]
}