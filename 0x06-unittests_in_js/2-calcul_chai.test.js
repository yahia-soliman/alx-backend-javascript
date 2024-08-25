const { expect } = require("chai");
const calculateNumber = require("./1-calcul.js");

describe("calculate sum of 2 numbers", () => {
  it("1 + 3 = 4", () => expect(calculateNumber("SUM", 1, 3)).to.equal(4));
  it("1 + 3.7 = 5", () =>
    expect(calculateNumber("SUM", 1, 3.7)).to.equal(5));
  it("1.2 + 3.7 = 5", () =>
    expect(calculateNumber("SUM", 1.2, 3.7)).to.equal(5));
  it("1.7 + 3.2 = 5", () =>
    expect(calculateNumber("SUM", 1.7, 3.2)).to.equal(5));
  it("1.5 + 3.7 = 6", () =>
    expect(calculateNumber("SUM", 1.5, 3.7)).to.equal(6));
});

describe("subtract b from a", () => {
  it("1 - 3 = -2", () =>
    expect(calculateNumber("SUBTRACT", 1, 3)).to.equal(-2));
  it("1 - 3.7 = -3", () =>
    expect(calculateNumber("SUBTRACT", 1, 3.7)).to.equal(-3));
  it("1.2 - 3.7 = -3", () =>
    expect(calculateNumber("SUBTRACT", 1.2, 3.7)).to.equal(-3));
  it("1.7 - 3.2 = -1", () =>
    expect(calculateNumber("SUBTRACT", 1.7, 3.2)).to.equal(-1));
  it("1.5 - 3.7 = -2", () =>
    expect(calculateNumber("SUBTRACT", 1.5, 3.7)).to.equal(-2));
  it("9.9 - 7 = 3", () =>
    expect(calculateNumber("SUBTRACT", 9.9, 7)).to.equal(3));
  it("9.2 - 7.2 = 2", () =>
    expect(calculateNumber("SUBTRACT", 9.2, 7.2)).to.equal(2));
  it("9 - 7.8 = 1", () =>
    expect(calculateNumber("SUBTRACT", 9, 7.8)).to.equal(1));
  it("9.3 - 7.8 = 1", () =>
    expect(calculateNumber("SUBTRACT", 9.3, 7.8)).to.equal(1));
  it("9 - 7 = 2", () =>
    expect(calculateNumber("SUBTRACT", 9, 7)).to.equal(2));
});

describe("divide a by b", () => {
  it("9.9 / 5 = 2", () =>
    expect(calculateNumber("DIVIDE", 9.9, 5)).to.equal(2));
  it("9.2 / 5 = 1.8", () =>
    expect(calculateNumber("DIVIDE", 9.2, 5)).to.equal(1.8));
  it("0 / 7.8 = 0", () =>
    expect(calculateNumber("DIVIDE", 0, 7.8)).to.equal(0));
  it("2.3 / 0 = Error", () =>
    expect(calculateNumber("DIVIDE", 2.3, 0)).to.equal("Error"));
  it("9.5 / 5.2 = 2", () =>
    expect(calculateNumber("DIVIDE", 9.5, 5.2)).to.equal(2));
  it("9 / 5.5 = 1.5", () =>
    expect(calculateNumber("DIVIDE", 9, 5.5)).to.equal(1.5));
});
