const functions = require('../../functions')

// Things to think about:
//  - how does this test ensure that the function `increment` has actually been called?
//  - what is the difference between `increment` and `increment()`
test('functions.callsFunction takes a function as a parameter and calls it once', function () {
  let actual = 0
  const expected = 1
  const increment = () => {
    actual++
  }
  functions.callsFunction(increment)
  expect(actual).toBe(expected)
})
