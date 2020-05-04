const countLetters = function(string) {
  const result = {};
  string = string.split(' ').join('').split('');
  for (letter of string) {
    (!(letter in result)) ? result[letter] = 1 : result[letter] += 1;
  } 
  return result;
};

module.exports = countLetters;