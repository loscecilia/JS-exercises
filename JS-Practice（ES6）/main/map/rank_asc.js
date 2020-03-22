'use strict';
var rank_asc = function(collection){
  collection.sort();
  collection.reverse();
  return collection;
};

module.exports = rank_asc;
