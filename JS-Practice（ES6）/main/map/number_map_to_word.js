'use strict';
var number_map_to_word = function(collection){
  var result = collection.map(function (item) {
    return String.fromCharCode(item+96);
  });
  return result;
};

module.exports = number_map_to_word;
