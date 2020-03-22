'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var collection_a = [];
  var collection_b = [];
  var collection_c = [];
  var len = Math.abs(number_a - number_b) + 1;
  if(number_a < number_b){
    for(var i = 0; i < len; i++){
      collection_a[i] = String.fromCharCode(number_a + 96);
      number_a++;
    }
    return collection_a;
  }
  else if(number_a > number_b){
    for(var i = 0; i < len; i++){
      collection_b[i] = String.fromCharCode(number_a + 96);
      number_a--;
    }
    return collection_b;
  }
  else{
    collection_c[0] = String.fromCharCode(number_a + 96);
    return collection_c;
  }
}

module.exports = get_letter_interval;
