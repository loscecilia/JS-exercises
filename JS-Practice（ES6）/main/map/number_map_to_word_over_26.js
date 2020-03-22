'use strict';
var number_map_to_word_over_26 = function(collection){
  var result = collection.map(function (item) {
    var num = item;
    if(item <= 26){
      item = String.fromCharCode(item+96);
    }
    else{
      while(num > 26){
        var pre = Math.floor(num/26);
        item = String.fromCharCode(pre+96);
        num = num%26;
        item += String.fromCharCode(num+96);
      }
    }
    return item;
  });
  return result;
};

module.exports = number_map_to_word_over_26;
