
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ui-rollingcode.cjs.production.min.js')
} else {
  module.exports = require('./ui-rollingcode.cjs.development.js')
}
