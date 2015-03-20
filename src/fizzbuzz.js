/* @flow */

function isMultipleOf(n, possibleMultiple) {
  return possibleMultiple % n === 0;
}

function fizzbuzz(n/*: number */)/* : string */ {
  if (isMultipleOf(3, n) && isMultipleOf(5, n)) return "FizzBuzz";
  if (isMultipleOf(3, n)) return "Fizz";
  if (isMultipleOf(5, n)) return "Buzz";

  return n.toString();
}

module.exports = fizzbuzz;