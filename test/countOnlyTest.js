const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe ('#countOnly', () => {
  it('should return true when name appears once', () => {
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    assert.equal(result1["Jason"], 1);
  });

  it('should return undefined when name does not appear', () => {
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    assert.equal(result1["Karima"], undefined);
  });

  it('should return undefined when name value is false', () => {
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": false });
    assert.equal(result1["Fang"], undefined);
  });

})
