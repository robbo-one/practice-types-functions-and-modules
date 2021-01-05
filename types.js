module.exports = {
getBoolean: getBoolean,
getFunction: getFunction,
getNull: getNull,
getNumber: getNumber,
getObject: getObject,
getString: getString
}
function getBoolean () {
  return true
}

function getFunction () {
  return getBoolean
}


function getNull () {
  return null
}

function getNumber () {
  return 16
}

function getObject () {
  return {}
}

function getString () {
  return "Sup"
}