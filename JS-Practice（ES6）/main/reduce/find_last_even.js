'use strict';

function find_last_even(collection) {
  //在这里写入代码
  collection.reverse();
  for(var i = 0; i < collection.length; i++){
    if(collection[i]%2 === 0)
      return collection[i];
  }
}

module.exports = find_last_even;
