/* @flow */

var fizzbuzz = require("../src/fizzbuzz");
var expect = require("expect");

describe("fizzbuzz", function () {
  it("should return the string 1 if passed the number 1", function () {
    expect(fizzbuzz(1)).toBe("1");
  });

  it("should return the string Fizz if passed the number 3", function () {
    expect(fizzbuzz(3)).toBe("Fizz");
  });

  it("should return the string Fizz if passed the number 6", function () {
    expect(fizzbuzz(6)).toBe("Fizz");
  });

  it("should return the string Fizz if passed the number 9", function () {
    expect(fizzbuzz(9)).toBe("Fizz");
  });

  it("should return the string Fizz if passed a multiple of three", function () {
    [3, 6, 9, 33, 96, 243, 303].forEach(function (number) {
      expect(fizzbuzz(number)).toBe("Fizz");
    });
  });

  it("should return the string Buzz if passed a multiple of five", function () {
    [5, 10, 25, 50, 110, 290].forEach(function (number) {
      expect(fizzbuzz(number)).toBe("Buzz");
    });
  });

  it("should return the string FizzBuzz if passed a multiple of three and five", function () {
    [15, 30, 45, 60, 90, 300].forEach(function (number) {
      expect(fizzbuzz(number)).toBe("FizzBuzz");
    });
  });

  it("should return the number it is passed if the number is not a multple of three nor five", function () {
    [1, 2, 4, 7, 11, 22, 79].forEach(function (number) {
      expect(fizzbuzz(number)).toBe(number.toString());
    });
  });
});