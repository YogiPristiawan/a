const moment = require("moment")

function now() {
  return moment().format()
}

console.log("aaaaaa")

module.exports = {
  now
}
