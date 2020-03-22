function count_same_elements(collection) {
  //在这里写入代码
  function split(ch){
    let array = ch.split("-");
    return {key:array[0], count:parseInt(array[1],10)};
  }
  function push(result,key,count){
    for(var i=0; i<count; i++){
      result.push(key);
    }
  }
  function expend(collection){
    let result = [];
    for(let item of collection){
      if(item.length > 1){
        let {key,count} = split(item);
        push(result,key,count);
      }else{
        result.push(item);
      }
    }
    return result;
  }
  var arr = expend(collection);
  var result = [];
  for(var i = 0; i < arr.length;){
    var count = 0;
    for(var j = 0; j < arr.length; j++){
      if(arr[i] === arr[j])
        count++;
    }
    result.push({
      key: arr[i],
      count: count
    })
    i += count;
  }
  return result;
}

module.exports = count_same_elements;
