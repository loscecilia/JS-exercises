'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  var result = [];
  var flag = 0;
  for(var i = 0; i < collection.length; i++){
    if(collection[i]%3 === 0){
      result[flag] = collection[i];
      flag++;
    }
  }
  return result;
}

module.exports = choose_multiples_of_three;
