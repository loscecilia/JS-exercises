'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  var arr = [];
  for(var i = 0; i < collection.length; i++){
    if(collection[i]%2 === 1){
      collection[i] = collection[i]*3 + 5;
      arr.push(collection[i]);
    }
  }
  var sum = arr.reduce(function (pre,cur) {
    return pre + cur;
  })
  return sum;
}

module.exports = hybrid_operation_to_uneven;

