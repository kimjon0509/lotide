const assertEqual = function(actual, expected) {
  actual = typeof actual === 'string' ? `"${actual}"` : actual;
  expected = typeof expected === 'string' ? `"${expected}"` : expected;

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  for (key in object) {
    if(object[key] === value) {
      return key
    }
  }
  return undefined
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);