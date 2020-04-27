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

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, '1');
assertEqual(1, 3);