const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe("calculate sum of 2 numbers", () => {
  it("1 + 3 = 4", () => assert.strictEqual(calculateNumber("SUM", 1, 3), 4));
  it("1 + 3.7 = 5", () =>
    assert.strictEqual(calculateNumber("SUM", 1, 3.7), 5));
  it("1.2 + 3.7 = 5", () =>
    assert.strictEqual(calculateNumber("SUM", 1.2, 3.7), 5));
  it("1.7 + 3.2 = 5", () =>
    assert.strictEqual(calculateNumber("SUM", 1.7, 3.2), 5));
  it("1.5 + 3.7 = 6", () =>
    assert.strictEqual(calculateNumber("SUM", 1.5, 3.7), 6));
});

describe("subtract b from a", () => {
  it("1 - 3 = -2", () =>
    assert.strictEqual(calculateNumber("SUBTRACT", 1, 3), -2));
  it("1 - 3.7 = -3", () =>
    assert.strictEqual(calculateNumber("SUBTRACT", 1, 3.7), -3));
  it("1.2 - 3.7 = -3", () =>
    assert.strictEqual(calculateNumber("SUBTRACT", 1.2, 3.7), -3));
  it("1.7 - 3.2 = -1", () =>
    assert.strictEqual(calculateNumber("SUBTRACT", 1.7, 3.2), -1));
  it("1.5 - 3.7 = -2", () =>
    assert.strictEqual(calculateNumber("SUBTRACT", 1.5, 3.7), -2));
  it("9.9 - 7 = 3", () =>
    assert.strictEqual(calculateNumber("SUBTRACT", 9.9, 7), 3));
  it("9.2 - 7.2 = 2", () =>
    assert.strictEqual(calculateNumber("SUBTRACT", 9.2, 7.2), 2));
  it("9 - 7.8 = 1", () =>
    assert.strictEqual(calculateNumber("SUBTRACT", 9, 7.8), 1));
  it("9.3 - 7.8 = 1", () =>
    assert.strictEqual(calculateNumber("SUBTRACT", 9.3, 7.8), 1));
  it("9 - 7 = 2", () =>
    assert.strictEqual(calculateNumber("SUBTRACT", 9, 7), 2));
});

describe("divide a by b", () => {
  it("9.9 / 5 = 2", () =>
    assert.strictEqual(calculateNumber("DIVIDE", 9.9, 5), 2));
  it("9.2 / 5 = 1.8", () =>
    assert.strictEqual(calculateNumber("DIVIDE", 9.2, 5), 1.8));
  it("0 / 7.8 = 0", () =>
    assert.strictEqual(calculateNumber("DIVIDE", 0, 7.8), 0));
  it("2.3 / 0 = Error", () =>
    assert.strictEqual(calculateNumber("DIVIDE", 2.3, 0), "Error"));
  it("9.5 / 5.2 = 2", () =>
    assert.strictEqual(calculateNumber("DIVIDE", 9.5, 5.2), 2));
  it("9 / 5.5 = 1.5", () =>
    assert.strictEqual(calculateNumber("DIVIDE", 9, 5.5), 1.5));
});
