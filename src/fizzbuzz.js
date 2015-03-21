import partial from "partial";

var isMultipleOf = (n, possibleMultiple) => possibleMultiple % n === 0;
var isMultipleOfThree = partial(isMultipleOf, 3);
var isMultipleOfFive = partial(isMultipleOf, 5);
var isMultipleOfThreeAndFive = (n) => isMultipleOfThree(n) && isMultipleOfFive(n);

var fizzbuzz = (n) => {
  if (isMultipleOfThreeAndFive(n)) return "FizzBuzz";
  if (isMultipleOfThree(n)) return "Fizz";
  if (isMultipleOfFive(n)) return "Buzz";

  return n.toString();
}

export default fizzbuzz;
