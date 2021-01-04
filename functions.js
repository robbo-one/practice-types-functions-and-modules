function callsFunction(x) {
  x()
}

function callsProperty(obj) {
  obj.increment()
}

function filter(arr, func) {
  // console.log(arr, func)
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {newArr.push(arr[i])}
  }
  return newArr
}




module.exports = {
  callsFunction: callsFunction,
  callsProperty: callsProperty,
  filter: filter
}