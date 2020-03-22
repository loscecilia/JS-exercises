'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var result = [];
  for(var i = 0; i < collection.length; i++){
    if(Array.isArray(collection[i])){
      result = result.concat(collection[i]);
    }
    else{
      result.push(collection[i]);
    }
  }
  return result;
}

module.exports = double_to_one;
