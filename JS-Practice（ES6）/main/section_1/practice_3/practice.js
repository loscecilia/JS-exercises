function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var collection_b = object_b.value;
  var result = [];
  for(var i = 0; i < collection_a.length; i++){
    if(collection_b.indexOf(collection_a[i])!=-1)
      result.push(collection_a[i]);
  }
  return result;
}

module.exports = collect_same_elements;
