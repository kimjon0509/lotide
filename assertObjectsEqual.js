const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const equalBool = eqObjects(actual,expected);
  let print = '';
  if (equalBool) {
    print = (`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    print =(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !==  ${inspect(expected)}`);
  }
  console.log(print);
};

module.exports = assertObjectsEqual