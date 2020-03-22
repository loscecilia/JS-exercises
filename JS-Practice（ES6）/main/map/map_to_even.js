'use strict';
function map_to_even(collection){
  var evenCollection = collection.map(function (item){
    return item*2;
  });
  return evenCollection;
}
module.exports = map_to_even;
