'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var collection_a = [];
  var collection_b = [];
  var collection_c = [];
  var collection_d = [];
  if(number_a < number_b){
    var len = (number_b - number_a + 1)/2;
    if(number_a % 2 != 0){
      number_a++;
    }
    for(var i = 0; i < len; i++){
      collection_a[i] = number_a;
      number_a += 2;
    }
    return collection_a;
  }
  else if(number_a > number_b){
    var len = (number_a - number_b + 1)/2;
    for(var i = 0; i < len; i++){
      collection_b[i] = number_a;
      number_a -= 2;
    }
    return collection_b;
  }
  else if((number_a === number_b)&&(number_a % 2 === 0)){
    collection_c[0] = number_a;
    return collection_c;
  }
  else{
    return collection_d;
  }
}

module.exports = get_integer_interval_2;
