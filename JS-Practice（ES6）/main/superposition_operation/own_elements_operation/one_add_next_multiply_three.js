'use strict';
function one_add_next_multiply_three(collection){
  var result = [];
  for(var i = 0; i < collection.length; i++){
    result[i] = (collection[i] + collection[i+1])*3;
  }
  result.splice(result.length-1,1);
  return result;
}
module.exports = one_add_next_multiply_three;
