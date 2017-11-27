module.exports = {
  callsFunction: callsFunction,
  callsProperty: callsProperty,
  filter: filter,
  find: find,
  map: map
}

function callsFunction (fn) {
  fn()
}

function callsProperty (obj) {
  obj.increment()
}

function filter (array, fn) {
  const filteredArray = []
  for (let item of array) {
    if (fn(item)) {
      filteredArray.push(item)
    }
  }
  return filteredArray
}

function find (array, fn) {
  for (let item of array) {
    if (fn(item)) {
      return item
    }
  }
}

function map (array, fn) {
  const newArray = []
  for (let item in array) {
    newArray.push(fn(item))
  }
  return newArray
}
