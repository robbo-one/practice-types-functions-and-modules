function getBoolean () {
  return true
}

function getFunction () {
  return function() {

  }
}

function getNull() {
  return null
}

function getNumber() {
  return 2
}



module.exports = {
  getBoolean: getBoolean,
  getFunction: getFunction,
  getNull: getNull,
  getNumber: getNumber
}