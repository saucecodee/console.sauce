const chalk = require("chalk")
const { colors } = require("./config")

function main(options) {
  const {
    name = null,
    isVisible = true,
    prefix = null,
    suffix = null,
    color = colors.WHITE,
    custom = () => { }
  } = options

  // Display nothing if visibility is false
  if (!isVisible) {
    console.log = () => { }
    return
  }

  global[name] = console.log(suffix, prefix)
}

// console.log(global.console.time())
console.trace("jjj")
console.log = null


module.exports = main