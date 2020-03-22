'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var collection_c = collection_a.concat(collection_b);
  for(var i = 0; i < collection_c.length; i++){
    for(var j = i + 1; j < collection_c.length; j++){
      if(collection_c[i] === collection_c[j]){
        collection_c.splice(j,1);
        j--;
      }
    }
  }
  return collection_c;
}

module.exports = get_union;

