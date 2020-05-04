const takeUntil = function(array, callback) {
  const index = array.findIndex(item => callback(item))
  return array.splice(0,index)

};

module.exports = takeUntil;