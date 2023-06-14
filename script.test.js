const script=require("./public/script")

test('54 + 2 to equal 56', () => {
    expect(script.sum(54, 2)).toBe(56);
  });


  test('8 * 4 to equal 32', () => {
    expect(script.multiply(8, 4)).toBe(32);
  });


  test('78 + 5 to equal 73', () => {
    expect(script.substract(78, 5)).toBe(73);
  });


  test('12 / 4 to equal 3', () => {
    expect(script.divide(12, 4)).toBe(3);
  });