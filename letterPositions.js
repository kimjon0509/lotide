const letterPositions = function(sentence) {
  const results = {};
  for (index in sentence) {
    if(sentence[index] !== ' '){
      if (!(sentence[index] in results)) {
        results[sentence[index]] = [Number(index)]
      } else {
        results[sentence[index]].push(Number(index))
      }  
    }
  }
  return results;
};

module.exports = letterPositions;