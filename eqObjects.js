const eqArrays = require('./eqArrays');

const eqObjectsLength = function(object1, object2) {
  const firstObjectKeys = Object.keys(object1);
  const secondObjectKeys = Object.keys(object2);
  if (firstObjectKeys.length !== secondObjectKeys.length) {
    return false;
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let condition = true;
  condition = eqObjectsLength(object1,object2);
  for (const key of Object.keys(object1)) {
    //const isArray = Array.isArray(object1[key]) && Array.isArray(object2[key]);
    if(!(eqArrays(object1[key],object2[key]) || object1[key] !== object2[key])) {
        condition = false;
    }
  }
  return condition;
};

module.exports = eqObjects;
