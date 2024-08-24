const { describe, it } = require("mocha");
const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("calculate sum of 2 numbers", () => {
  it("1 + 3 = 4", () => assert.strictEqual(calculateNumber(1, 3), 4));
  it("1 + 3.7 = 5", () => assert.strictEqual(calculateNumber(1, 3.7), 5));
  it("1.2 + 3.7 = 5", () => assert.strictEqual(calculateNumber(1.2, 3.7), 5));
  it("1.5 + 3.7 = 6", () => assert.strictEqual(calculateNumber(1.5, 3.7), 6));
});
