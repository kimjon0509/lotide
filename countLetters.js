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

const countLetters = function(string) {
  const result = {};
  string = string.split(/\s/).join('');
  console.log(string)
  for (letter of string) {
    if (!(letter in result)) {
      result[letter] = 1;
    } else {
      result[letter] += 1;
    }
  } return result;
};

let word = countLetters('hello my name is');
assertEqual(word['h'] , 1);
assertEqual(word['e'] , 2);
assertEqual(word['l'] , 2);
assertEqual(word['o'] , 1);
assertEqual(word['m'] , 2);
assertEqual(word['k'] , undefined);