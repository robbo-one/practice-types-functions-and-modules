
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




function getFunction(){
  console.log('first function')
 

    function getFunction2(){

      console.log('2 function')

    }
   return getFunction2
   
}



function getNull(){
  return null
}



function getNumber(){
  return Number()
}


function getObject(){
  return Object()
}


function getString(){
  return String()
}
