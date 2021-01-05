module.exports = {
  getBoolean: getBoolean,
  getFunction: getFunction,
  getNull: getNull,
  getNumber: getNumber,
  getObject: getObject,
  getString: getString,
  

}

function getBoolean() {
  return true
}

function getFunction() {
  return getFunction
}

function getNull() {
  return null
}

function getNumber() {
  return Math.random()
}

function getObject () {
  return {}
}

function getString() {
  return "Hello"
}

