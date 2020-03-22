'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
    var newCollection = [];
    for(var i = 0; i < collection_a.length; i++) {
        for(var j = 0; j < collection_b.length; j++) {
            if(collection_a[i] === collection_b[j]){
                newCollection.push(collection_a[i]);
            }
        }
    }
    return newCollection;
}

module.exports = choose_common_elements;
