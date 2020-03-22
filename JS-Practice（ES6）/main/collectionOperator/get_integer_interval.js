'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var collection_a = [];
  var collection_b = [];
  var collection_c = [];
  if(number_a < number_b){
    var len = number_b - number_a + 1;
    for(var i = 0; i < len; i++){
      collection_a[i] = number_a;
      number_a++;
    }
    return collection_a;
  }
  else if(number_a > number_b){
    var len = number_a -  number_b + 1;
    for(var i = 0; i < len; i++){
      collection_b[i] = number_a;
      number_a--;
    }
    return collection_b;
  }
  else{
    collection_c[0] = number_a;
    return collection_c;
  }
}

module.exports = get_integer_interval;

