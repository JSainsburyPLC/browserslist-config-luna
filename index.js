const desktop = require('./desktop')
const mobile = require('./mobile')

module.exports = desktop.concat(mobile)
