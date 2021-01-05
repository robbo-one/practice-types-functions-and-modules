const functions = require('../../functions')

// Write a simple filter implementation
test('functions.filter takes an array as the first parameter, a function as the second parameter, and only returns elements for which the function returns true', function () {
  const expected = [2, 4, 6]
  const actual = functions.filter([1, 2, 3, 4, 5, 6, 7], (n) => n % 2 === 0)
  expect(actual).toEqual(expected)
})

/*

(n) => n % 2 === 0

(num) => {
  return n % 2 === 0
}

function (num)
{
  return num % 2 === 0
}

*/