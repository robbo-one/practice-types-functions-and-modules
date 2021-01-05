module.exports = {
  callsFunction: callsFunction,
  callsProperty: callsProperty,
  filter: filter,
  map: map,
  find: find,
};
function robsNowHadTea() {
  return "TEAAAA!!!!";
}
function callsFunction(robsNowHadTea) {
  robsNowHadTea();
}

function callsProperty(obj) {
  obj.increment();
}

function filter(arr, func) {
  for (i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return [arr[i]];
    }
  }
}

function find(arr, func) {

  const newArr = []

  for (i = 0; i < arr.length; i++) {
    if (func(arr[i])) {    
      newArr.push(arr[i]);    
    }
  }
  return newArr[0]
}

function map(arr, func) {
  const newArr = [];

  for (i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
}
