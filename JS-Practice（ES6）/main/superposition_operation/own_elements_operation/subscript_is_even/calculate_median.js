'use strict';
var calculate_median = function(collection){
  var even = [];
  for(var i = 0; i < collection.length; i++){
    if(i%2 === 1)
      even.push(collection[i]);
  }
  var median;
  var len = even.length;
  if(len%2 === 1){
    var index = Math.round(len/2);
    median = even[index-1];
  }
  else{
    var index1 = len/2;
    var index2 = index1 + 1;
    median = (even[index1-1] + even[index2-1])/2;
  }
  return median;
};
module.exports = calculate_median;
