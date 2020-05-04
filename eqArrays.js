const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) return false;
  for (let item in firstArray){
    if (firstArray[item] !== secondArray[item]) return false;
  }
  return true;
};

module.exports = eqArrays;