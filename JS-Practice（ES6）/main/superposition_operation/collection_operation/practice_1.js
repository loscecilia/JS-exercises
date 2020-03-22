'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var arr = collection.map(function (item) {
    return item*3 + 2;
  });
  var sum = arr.reduce(function (pre,cur) {
    return pre + cur;
  });
  return sum;
}

module.exports = hybrid_operation;

