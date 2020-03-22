'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var median;
  var len = collection.length;
  if(len%2 === 1){
    var index = Math.round(len/2);
    median = collection[index-1];
  }
  else{
    var index1 = len/2;
    var index2 = index1 + 1;
    median = Math.ceil((collection[index1-1] + collection[index2-1])/2);
  }
  var str;
  if(median <= 26){
    str = String.fromCharCode(item+96);
  }
  else{
    while(median > 26){
      var pre = Math.floor(median/26);
      str = String.fromCharCode(pre+96);
      median = median%26;
      str += String.fromCharCode(median+96);
    }
  }
  return str;
}

module.exports = median_to_letter;
