module.exports = {
  add,
  multiply,
  subtract,
  divide,
}

function add(...args) {
  if (!args) {
    return 0
  } else {
    return args.reduce((acc, e) => {
      return acc + e
    }, 0)
  }
}

// function add(...args) {
//   return !args ? 0 : args.reduce((a, b) => a + b)
// }

function multiply(a, b) {
  return a * b
}
function subtract(a, b) {
  return a - b
}
function divide(a, b) {
  return a / b
}
