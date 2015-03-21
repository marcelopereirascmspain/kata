/* @flow */

import fizzbuzz from "../src/fizzbuzz";
import expect from "expect";

describe("fizzbuzz", () => {
  it("should return the string Fizz if passed a multiple of three but not five", () => {
    [3, 6, 9, 33, 96, 243, 303].forEach((number) => {
      expect(fizzbuzz(number)).toBe("Fizz");
    });
  });

  it("should return the string Buzz if passed a multiple of five but not three", () => {
    [5, 10, 25, 50, 110, 290].forEach((number) => {
      expect(fizzbuzz(number)).toBe("Buzz");
    });
  });

  it("should return the string FizzBuzz if passed a multiple of three and five", () => {
    [15, 30, 45, 60, 90, 300].forEach((number) => {
      expect(fizzbuzz(number)).toBe("FizzBuzz");
    });
  });

  it("should return the number it is passed if the number is not a multple of three nor five", () => {
    [1, 2, 4, 7, 11, 22, 79].forEach((number) => {
      expect(fizzbuzz(number)).toBe(number.toString());
    });
  });
});