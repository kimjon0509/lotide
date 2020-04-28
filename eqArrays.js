const assertEqual = function(actual, expected) {
  actual = typeof actual === 'string' ? `"${actual}"` : actual;
  expected = typeof expected === 'string' ? `"${expected}"` : expected;
  
  // ternary operator
  // condition ? true case : false case

  if (actual === expected) {
    // console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);

    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    // console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
    
  }
};

const eqArrays = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++){
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)