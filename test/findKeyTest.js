const assert = require('chai').assert;
const findKey = require('../findKey');

describe ('#findKey', () => {
  it ('should return the first key, where the value corresponds to the argument', () => {
    itemObj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }

    assert.equal(findKey(itemObj, x => x.stars === 2), 'noma');

  });
})