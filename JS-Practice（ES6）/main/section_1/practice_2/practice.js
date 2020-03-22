function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var collection_c = [];
  for(var i = 0; i < collection_b.length; i++){
    if(Array.isArray(collection_b[i]))
      collection_c = collection_c.concat(collection_b[i]);
  }
  var result = [];
  for(var i = 0; i < collection_a.length; i++){
    if(collection_c.indexOf(collection_a[i])!=-1)
      result.push(collection_a[i]);
  }
  return result;
}

module.exports = collect_same_elements;
