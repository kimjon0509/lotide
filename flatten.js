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
  // if statment to check length of firstArray and secondArray 
  for (let i = 0; i < firstArray.length; i++){
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
};

const flatten = function(arrayOfValues) {
  let result  = [];
  for(elements of arrayOfValues) {
    if (!Array.isArray(elements)){
      result.push(elements);
    } else {
      for (element of elements) {
        result.push(element);
      }
    }
  }
  console.log(result);
};

flatten([1, 2, [3, 4], 5, [6]]);