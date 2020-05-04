const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe ('#eqObjects', () => {
  it('should return true when key-value pairs are the same', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.equal(eqObjects(ab, ba), true);
  });

  it('should return false when key-value paris are different', () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.equal(eqObjects(ab, abc), false)
  });

  it('should return true if key-value pairs are the same (when val is an array)', () => {
    const abd = { a: "1", b: ["2",3,1], c: "3" };
    const abe = { a: "1", b: ["2",3,1], c: "3" };
    assert.equal(eqObjects(abd, abe), true);
  });
});

