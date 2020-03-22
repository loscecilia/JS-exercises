'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var newArr = [];
  for(var i = 0; i < collection.length; i++){
    if(Array.isArray(collection[i])){
      newArr = newArr.concat(collection[i]);
    }
    else{
      newArr.push(collection[i]);
    }
  }
  var result = [];
  for(var i = 0; i < newArr.length; i++){
    if(result.indexOf(newArr[i])===-1){
      result.push(newArr[i]);
    }
  }
  return result;

}

module.exports = double_to_one;
