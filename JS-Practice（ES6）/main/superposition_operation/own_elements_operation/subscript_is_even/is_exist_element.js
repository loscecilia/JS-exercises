'use strict';
var is_exist_element = function(collection,element){
  var arr = [];
  for(var i = 0; i < collection.length; i++){
    if(i%2 === 0)
     arr.push(collection[i]);
  }
  if(arr.indexOf(element) != -1)
    return true;
  else
    return false;
};
module.exports = is_exist_element;
