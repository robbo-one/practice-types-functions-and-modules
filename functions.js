module.exports = {
  callsFunction: callsFunction,
  callsProperty: callsProperty,
  filter: filter,
  find: find,
  map: map

}

function callsFunction(func) {
  func()
}

function callsProperty(obj) {
  obj.increment()
}

function filter (arr, func) {
  const newArr = []
  for (i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

function find (arr, func) {
  for (i = 0; i < arr.length; i++){
    if (func(arr[i]) === true){
      return arr[i]   
    }
  }
}

function map(arr, func) {
  const newArr = []
  for (i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]))
  }
  return newArr
}