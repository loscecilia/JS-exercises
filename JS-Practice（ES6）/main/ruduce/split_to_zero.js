'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result = [];
  while (number > 0){
    result.push(number);
    number = number - interval;
  }
  return result;
}

module.exports = spilt_to_zero;
