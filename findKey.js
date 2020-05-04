const findKey = function (itemObj, callback){
  //destructuring
  //(arg) => { let key = arg[0]; let value = arg[1]; ... })
  return Object.entries(itemObj).find(([key,value]) => callback(value))[0]
  // Object.entries(itemObj) = [["Blue Hill",{ stars: 1 }],["Akaleri",{stars: 3 }]]
};

module.exports = findKey;



