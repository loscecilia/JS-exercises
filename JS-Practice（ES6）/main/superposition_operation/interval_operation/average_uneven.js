'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var sum = 0;
  var count = 0;
  for(var i = 0; i < collection.length; i++){
    if(collection[i]%2 === 1){
      sum += collection[i];
      count++;
    }
  }
  var average = sum/count;
  return average;
}

module.exports = average_uneven;
