
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ui-rc-components.cjs.production.min.js')
} else {
  module.exports = require('./ui-rc-components.cjs.development.js')
}
