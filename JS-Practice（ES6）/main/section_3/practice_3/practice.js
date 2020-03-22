function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  for(var i = 0; i < collection_a.length;){
    var count = 0;
    for(var j = 0; j < collection_a.length; j++){
      if(collection_a[i] === collection_a[j])
        count++;
    }
    result.push({
      key: collection_a[i],
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
