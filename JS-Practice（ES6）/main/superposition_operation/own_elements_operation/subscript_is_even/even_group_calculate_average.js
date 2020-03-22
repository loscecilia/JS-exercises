'use strict';
var even_group_calculate_average = function(collection){
  var evenCount = [];
  var even = [];
  for(var i = 0; i < collection.length; i++){
    if(i%2 === 1){
      evenCount.push(collection[i]);
    }
  }
  for(var i = 0; i < evenCount.length; i++){
    if(evenCount[i]%2 === 0){
      even.push(evenCount[i]);
    }
  }
  function average(collection) {
    var sum = collection.reduce(function (pre,cur) {
      return pre + cur;
    })
    var ave = sum/collection.length;
    return ave;
  }
  if(even.length === 0)
    return [0];
  else{
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    for(var i = 0; i < even.length; i++){
      if(even[i]<10)
        arr1.push(even[i]);
      else if(even[i]<100)
        arr2.push(even[i]);
      else
        arr3.push(even[i]);
    }
    if(arr1.length===0 && arr2.length===0){
      var ave = average(arr3);
      return [ave];
    }
    else{
      var ave1 = average(arr1);
      var ave2 = average(arr2);
      var ave3 = average(arr3);
      return [ave1,ave2,ave3];
    }
  }
};
module.exports = even_group_calculate_average;
