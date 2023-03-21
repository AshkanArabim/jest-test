const reverseString = require("../src/reverseString");

test("reverses one word", () => {
  expect(reverseString("Hello!!!")).toBe("!!!olleH");
});

test("reverse one complete sentence", () => {
  expect(reverseString("Yooooo wazap?!")).toBe("!?pazaw oooooY");
});
