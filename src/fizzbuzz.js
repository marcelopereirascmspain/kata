/* @flow */

function isMultipleOf(n/*: number */, possibleMultiple/*: number */)/* : boolean */ {
  return possibleMultiple % n === 0;
}

function isMultipleOfThree(possibleMultiple/*: number */)/* : boolean */ {
  return isMultipleOf(3, possibleMultiple);
}

function isMultipleOfFive(possibleMultiple/*: number */)/* : boolean */ {
  return isMultipleOf(5, possibleMultiple);
}

function fizzbuzz(n/*: number */)/* : string */ {
  if (isMultipleOfThree(n) && isMultipleOfFive(n)) return "FizzBuzz";
  if (isMultipleOfThree(n)) return "Fizz";
  if (isMultipleOfFive(n)) return "Buzz";

  return n.toString();
}

module.exports = fizzbuzz;