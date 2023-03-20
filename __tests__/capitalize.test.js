const capitalize = require("../src/capitalize");

// one word
test("capitalizes the first letter of one word", () => {
  expect(capitalize("testing").toBe("Testing"));
});

// a sentence
test("capitalizes the first character of a bigger string", () => {
  expect(capitalize("this is a test, this is just a test.")).toBe(
    "This is a test, this is just a test."
  );
});

// multiple sentences
test("capitalizes only the first character of a string containing multiple sentences", () => {
  expect(capitalize("this is a test. this is another test.")).toBe(
    "This is a test. this is another test."
  );
});

// first character is a number
test("doens't change string if the first character is a number.", () => {
  expect(capitalize("0 this is just a test.")).toBe(
    "0 this is just a test."
  );
});

// everything is a number
test("doesn't change string if the string is all numbers and special characters", () => {
  expect(capitalize("098712340123498710237401234")).toBe(
    "098712340123498710237401234"
  );
});
