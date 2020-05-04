const without = function(source, itemsToRemove) {
  const result =  source.filter(word => !itemsToRemove.includes(word))
  return result;
};

module.exports = without;