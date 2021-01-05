module.exports = {
    callsFunction: callsFunction,
    callsProperty: callsProperty,
    filter: filter,
    find: find,
    map: map
}
    function callsFunction (increment) {
       increment ()
    }

    function callsProperty (obj) {
        obj.increment ()
    }

        function filter (array, func) {
           const newArray = []
            for (i = 0; i < array.length; i++){
             //   func (array[i]) 
            if (func (array[i]) == true ){
            newArray.push (array[i])
            }}
            console.log (newArray)
            
        return newArray
            
        }
    function find (array, func) {
            for (i = 0; i < array.length; i++){
            if (func (array[i]) == true ){
                return array[i]
            }}}

    function map (array, func)
            
