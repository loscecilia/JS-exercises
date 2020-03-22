'use strict';

function compute_average(collection) {
  //在这里写入代码
  var sum = collection.reduce(function (pre,cur) {
    return pre + cur;
  })
  var average = sum/(collection.length);
  return average;
}

module.exports = compute_average;

