'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  for(var i = 0; i < collection.length; i++){
    for(var j = i + 1; j < collection.length; j++){
      if(collection[i] === collection[j]){
        collection.splice(j,1);
        j--;
      }
    }
  }
  return collection;
}

module.exports = choose_no_repeat_number;
