function callsFunction(x) {
  x()
}

function callsProperty(obj) {
  obj.increment()
}






module.exports = {
  callsFunction: callsFunction,
  callsProperty: callsProperty,
}