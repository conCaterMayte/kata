const { fullName } = require(`./codewars.js`);

// test(fullName("Mx. Jemima Puddledcuk"), "Jemima");

test("Expected Name", () => {
  const actual = fullName("Mx. Jemima Puddledcuk");
  const expected = "Jemima";
  expect(actual).toBe(expected);
});

test("Expected Name", () => {
  const actual = fullName("Lord Bucket Head");
  const expected = "Bucket";
  expect(actual).toBe(expected);
});

test("Expected Name", () => {
  const actual = fullName("King Clovis the Axe-wielder");
  const expected = "Clovis";
  expect(actual).toBe(expected);
});

test("Expected Name", () => {
  const actual = fullName("Lady Penelope Moncrieff");
  const expected = "Penelope";
  expect(actual).toBe(expected);
});
