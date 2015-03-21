import { isMultipleOfThree, isMultipleOfFive, isMultipleOfThreeAndFive } from "./math";

let fizzbuzz = (n) => {
  if (isMultipleOfThreeAndFive(n)) return "FizzBuzz";
  if (isMultipleOfThree(n)) return "Fizz";
  if (isMultipleOfFive(n)) return "Buzz";

  return n.toString();
}

export default fizzbuzz;
