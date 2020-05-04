const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe ('#eqArrays', () => {
  it('should return true if both arrays are the exact same', () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true)
  });
  it('should return false if the arrays are different', () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)
  });
});