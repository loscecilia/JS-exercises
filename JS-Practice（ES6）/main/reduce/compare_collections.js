'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var flag = 1;
  if(collection_a.length === collection_b.length){
    for(var i = 0; i < collection_a.length; i++){
      if(collection_a[i] != collection_b[i])
        flag = 0;
    }
  }
  else{
    flag = 0;
  }
  if(flag)
    return true;
  else
    return false;
}

module.exports = compare_collections;


