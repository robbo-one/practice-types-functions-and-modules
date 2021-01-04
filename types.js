function getBoolean() {
  return true
}

function getFunction() {
  return getBoolean
}

function getNull() {
  return null
}

function getNumber() {
  return 2
}

function getObject() {
  return {}
}

function getString() {
  return "sup"
}

module.exports = {
  getBoolean : getBoolean,
  getFunction : getFunction,
  getNull : getNull,
  getNumber : getNumber,
  getObject : getObject,
  getString : getString
}
