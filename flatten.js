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
  return result;
};

module.exports = flatten;