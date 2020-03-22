'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var result = {};
  collection.forEach(function(e){
    // result[e] = result[e]>=1?result[e]+1:1
    if(result[e] >= 1)
      result[e] = result[e] + 1;
    else
      result[e] = 1;
  });
  return result;
}

module.exports = grouping_count;
