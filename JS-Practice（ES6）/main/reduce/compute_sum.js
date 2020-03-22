'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  var sum = collection.reduce(function (pre,cur) {
    return pre + cur;
  })
  return sum;
}

module.exports = calculate_elements_sum;

