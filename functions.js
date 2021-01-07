//Solutions by Rosemary, push to Github (seems to be on Isaac's ID)


module.exports = {
  callsFunction: callsFunction,
  callsProperty: callsProperty,
  filter: filter,
  map: map,
  find: find
}

function callsFunction (func) {
  func()
}

function callsProperty (obj) {
  obj.increment()
}


//needed to peek at the solution for these but after doing so understand the logic and feel confident I can apply these functions
function filter (arr, func) {
  let newArr = []
  for (let item of arr) {
    if (func(item)) {
      newArr.push(item)
    }
  }
  return newArr
}


function map (arr, func) {
  let newArr = []
  for 
  (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]))
  }    
    return newArr
  }


function find (arr, func) {
  for
  (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      return arr[i]
    }
  }
}