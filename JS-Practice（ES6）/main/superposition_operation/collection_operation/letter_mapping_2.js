'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var sum = collection.reduce(function (pre,cur) {
    return pre + cur;
  })
  var average = Math.ceil(sum/collection.length);
  return String.fromCharCode(average + 96);
}

module.exports = average_to_letter;

