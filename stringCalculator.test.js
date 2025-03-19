const { add } = require("./stringCalculator");

describe("String Calculator", () => {
  // Test for an empty string input, expecting a result of 0
  test("should return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  // Test for a single number input, expecting the same number as output
  test("should return number for single number", () => {
    expect(add("1")).toBe(1);
  });

  // Test for two numbers separated by a comma, expecting their sum
  test("should return sum for two numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  // Test for multiple numbers separated by commas, expecting their sum
  test("should handle multiple numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  // Test for numbers separated by new lines and commas, expecting their sum
  test("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  // Test for custom delimiter specified at the start, expecting the sum
  test("should support different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  // Test for negative numbers, expecting an error to be thrown
  test("should throw error for negative numbers", () => {
    expect(() => add("-1,2")).toThrow("negative numbers not allowed -1");
  });

  // Test for multiple negative numbers, expecting all to be listed in the error
  test("should show all negative numbers in error message", () => {
    expect(() => add("-1,-2,3,-4")).toThrow(
      "negative numbers not allowed -1,-2,-4"
    );
  });

  // Test to ensure numbers greater than 1000 are ignored
  test("should ignore numbers bigger than 1000", () => {
    expect(add("2,1001")).toBe(2);
    expect(add("1000,2")).toBe(1002); // 1000 should be included
  });

  // Test for delimiters of any length, expecting the sum
  test("should handle delimiters of any length", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
    expect(add("//[@@@@]\n1@@@@2@@@@3")).toBe(6);
  });

  // Test for multiple delimiters, expecting the sum
  test("should handle multiple delimiters", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
  });

  // Test for multiple delimiters with length longer than one character, expecting the sum
  test("should handle multiple delimiters with length longer than one char", () => {
    expect(add("//[***][#####][@@]\n1***2#####3@@4")).toBe(10);
  });
});
