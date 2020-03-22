'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  collection.sort(function (a,b) {
    return a-b;
  });
  var arr1 = [];
  for(var i = 0; i < collection.length - collection.length%3; i++){
    if(i%3 == 0){
      arr1.push(collection[i]);
    }
  }
  var arr2 = [];
  for(var i = 0; i < collection.length; i++){
    if(arr1.indexOf(collection[i])===-1)
      arr2.push(collection[i]);
  }
  var j = 0;
  for(var i = 2; i < collection.length;){
    arr2.splice(i,0,arr1[j]);
    i += 3;
    j++;
  }
  return arr2;
}
module.exports = rank_by_two_large_one_small;
