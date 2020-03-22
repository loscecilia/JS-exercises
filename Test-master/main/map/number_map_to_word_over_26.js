'use strict';
var number_map_to_word = function(collection){
  var newCollection = [];
  for(var i = 0; i < collection.length; i++) {
    if(collection[i] <= 26){
      newCollection.push(String.fromCharCode(collection[i]+96));
    }
    else{
      newCollection[i] = 'a';
      for(var j = 1; j <= parseInt(collection[i] / 26); j++) {
        newCollection[i] += String.fromCharCode(collection[i]-j*26 + 96);
      }
    }
  }
  return newCollection;
};

module.exports = number_map_to_word;
