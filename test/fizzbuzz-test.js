var fizzbuzz = require("../src/fizzbuzz");
var expect = require("expect");

describe("fizzbuzz", function () {
  it("should return the string 1 if passed the number 1", function () {
    expect(fizzbuzz(1)).toEqual("1"); 
  });
});