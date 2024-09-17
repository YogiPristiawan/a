const moment = require("moment")
const mmt = require("@c/mmt")

function now() {
  return moment().format()
}

console.log(mmt.startDay())

module.exports = {
  now
}
