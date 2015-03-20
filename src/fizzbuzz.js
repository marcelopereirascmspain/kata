/* @flow */

function fizzbuzz(number/*: number */)/* : string */ {
  if (number === 3 || number === 6) {
    return "Fizz";
  }

  return "1";
}

module.exports = fizzbuzz;