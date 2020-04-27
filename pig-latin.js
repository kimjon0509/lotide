const args = process.argv;
let newArr = args.slice(2, args.length);

const pigLatin = function(array) {
  let latinstr = '';
  for (let i = 0; i < array.length; i++) {
    latinstr += array[i].slice(1,array[i].length) + array[i][0] + "ay ";
  }console.log(latinstr);
};

pigLatin(newArr);