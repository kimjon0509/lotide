const middle = function(array) {
  const arrayLen = array.length;
  if (arrayLen <= 2) {
    return [];
  } 
  const middleIndex = arrayLen/2
  if(arrayLen % 2 === 0) {
    return array.slice(middleIndex - 1, middleIndex + 1)
  }
  return array.slice(Math.floor(middleIndex), Math.ceil(middleIndex));
};

module.exports = middle;