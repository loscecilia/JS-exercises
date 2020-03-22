function count_same_elements(collection) {
  //在这里写入代码
  function split(ch){
    if(ch.includes("-")){
      let array = ch.split("-");
      return {name:array[0],summary:parseInt(array[1],10)};
    }
    if(ch.includes(":")){
      let array = ch.split(":");
      return {name:array[0],summary:parseInt(array[1],10)};
    }
    if(ch.includes("[")){
      let name = ch.charAt(0);
      let summary = parseInt(ch.substr(2,ch.length-1));
      return {name,summary};
    }
  }
  function push(result,name,summary){
    for(var i=0; i<summary; i++){
      result.push(name);
    }
  }
  function expend(collection){
    let result = [];
    for(let item of collection){
      if(item.length > 1){
        let {name,summary} = split(item);
        push(result,name,summary);
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
      name: arr[i],
      summary: count
    })
    i += count;
  }
  return result;
}

module.exports = count_same_elements;
