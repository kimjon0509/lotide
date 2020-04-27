const args = process.argv;
let newArr = args.slice(2, args.length);

const reverse = function(array){
  let reverseStr = ''
  for(let i = 0; i < array.length; i++) {
    for(let j = array[i].length - 1; j >= 0; j--) {
      reverseStr += array[i][j];
    }console.log(reverseStr);
    reverseStr = '';
  }
};

reverse(newArr);