const { add } = require("./stringCalculator");

describe("String Calculator", () => {
  test("should return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });
  test("should return number for single number", () => {
    expect(add("1")).toBe(1);
  });
  test("should return sum for two numbers", () => {
    expect(add("1,5")).toBe(6);
  });
  test("should handle multiple numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });
  test("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });
  test("should support different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
  test("should throw error for negative numbers", () => {
    expect(() => add("-1,2")).toThrow("negative numbers not allowed -1");
  });
  test("should show all negative numbers in error message", () => {
    expect(() => add("-1,-2,3,-4")).toThrow(
      "negative numbers not allowed -1,-2,-4"
    );
  });
  test("should ignore numbers bigger than 1000", () => {
    expect(add("2,1001")).toBe(2);
    expect(add("1000,2")).toBe(1002); // 1000 should be included
  });
  test("should handle delimiters of any length", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
    expect(add("//[@@@@]\n1@@@@2@@@@3")).toBe(6);
  });
  test("should handle multiple delimiters", () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
  });
  test("should handle multiple delimiters with length longer than one char", () => {
    expect(add("//[***][#####][@@]\n1***2#####3@@4")).toBe(10);
  });
});
