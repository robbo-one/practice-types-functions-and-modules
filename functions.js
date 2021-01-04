function callsFunction (mySecondFunc) {
 mySecondFunc()
}

function mySecondFunc() {
  console.log("Yo")
}

function callsProperty (obj) {
  obj.increment()
}

function filter (arr,func) {
  const newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i]) == true ){
      newArr.push(arr[i])
    }
  }
  return newArr
}

function find (arr,func) {
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i]) == true ){
      return arr[i]
    }
  }
}

function map (arr,func) {
  const newArr = []
  for (var i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]))
  }
return newArr
}


module.exports = {
  callsFunction : callsFunction,
  mySecondFunc : mySecondFunc,
  callsProperty : callsProperty,
  filter : filter,
  find : find,
  map : map,
}