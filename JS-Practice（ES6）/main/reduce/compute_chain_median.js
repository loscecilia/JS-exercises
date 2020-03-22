'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var arr = collection.split('->');
  arr.sort(function (a, b) {
    return a - b;
  });
  var len = arr.length;
  if(len%2 === 1){
    var index = Math.round(len/2);
    return Number(arr[index-1]);
  }
  else{
    var index1 = len/2;
    var index2 = index1 + 1;
    return (Number(arr[index1-1]) + Number(arr[index2-1]))/2;
  }
}

module.exports = compute_chain_median;
