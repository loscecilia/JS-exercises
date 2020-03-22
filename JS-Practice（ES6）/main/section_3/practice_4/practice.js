function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  function split(ch){
    let array = ch.split("-");
    return {key:array[0], count:parseInt(array[1],10)};
  }
  function push(result,key,count){
    for(var i=0; i<count; i++){
      result.push(key);
    }      //注意，此方法不需要返回值！
  }
  function expend(collection){
    let result = [];
    for(let item of collection){
      if(item.length > 1){
        let {key,count} = split(item);    //ES6的语法，返回key-count键值对
        push(result,key,count);
      }else{
        result.push(item);
      }
    }
    return result;
  }
  var arr = expend(collection_a);
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
  for(var i = 0; i < result.length; i++){
    for(var j = 0; j < object_b.value.length; j++){
      if(result[i].key === object_b.value[j]){
        if(result[i].count >= 3){
          var num = Math.floor(result[i].count/3);
          result[i].count -= num;
        }
      }
    }
  }
  return result;
}

module.exports = create_updated_collection;
