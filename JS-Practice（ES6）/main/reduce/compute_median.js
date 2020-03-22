'use strict';

function compute_median(collection) {
  //在这里写入代码
  function sort(collection) {
    for(var i = 0; i < collection.length; i++){
      for(var j = 0 ; j < collection.length-1; j++){
        if(collection[j] > collection[j+1]){
          var temp = collection[j+1];
          collection[j+1] = collection[j];
          collection[j] = temp;
        }
      }
    }
    return collection;
  }
  collection = sort(collection);
  var len = collection.length;
  if(len%2 === 1){
    var index = Math.round(len/2);
    return collection[index-1];
  }
  else{
    var index1 = len/2;
    var index2 = index1 + 1;
    return (collection[index1-1] + collection[index2-1])/2;
  }
}

module.exports = compute_median;


