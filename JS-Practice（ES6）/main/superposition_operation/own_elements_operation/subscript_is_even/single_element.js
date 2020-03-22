'use strict';
var single_element = function(collection){
  var even = [];
  for(var i = 0; i < collection.length; i++){
    if(i%2 === 1)
      even.push(collection[i]);
  }
  var arr = [];
  for(var i = 0; i < even.length;){
    var count = 0;
    for(var j = 0; j < even.length; j++){
      if(even[i] === even[j])
        count++;
    }
    arr.push({
      key: even[i],
      count: count
    })
    i += count;
  }
  var result = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i].count === 1)
      result.push(arr[i].key);
  }
  return result;
};
module.exports = single_element;
