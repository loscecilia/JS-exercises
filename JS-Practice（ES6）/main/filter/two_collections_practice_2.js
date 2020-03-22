'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  for(var i = 0; i < collection_a.length; i++){
    for(var j = 0; j < collection_b.length; j++){
      if(collection_a[i] === collection_b[j]){
        collection_a.splice(i,1);
        i--;
      }
    }
  }
  return collection_a;
}

module.exports = choose_no_common_elements;
