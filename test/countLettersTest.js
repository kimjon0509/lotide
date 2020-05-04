const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe ('#countLetters', () => {
  it('should return correct number of times a character appeared in a string', () => {
    let word = countLetters('hello my name is');
    assert.equal(word['h'] , 1);
    assert.equal(word['e'] , 2);
    assert.equal(word['l'] , 2);
    assert.equal(word['o'] , 1);
    assert.equal(word['m'] , 2);
  });

  it('should return undefined if the character does not appear in a string', () => {
    let word = countLetters('hello my name is');
    assert.equal(word['k'] , undefined);
  });

  it('should return an object with the correct values', () => {
    assert.deepEqual(countLetters('hello my name is'), {h: 1, e: 2, l: 2, o: 1, m: 2, y: 1, n: 1, a: 1, i: 1, s: 1})
  });
});