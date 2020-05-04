const assert = require('chai').assert;
const map = require('../map');

describe ('#map', () => {
  it ('should return an array of values which is dependent on callback function', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
});