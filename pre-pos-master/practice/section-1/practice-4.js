'use strict';

function collectSameElements(collectionA, objectB) {
//  在这里写代码
	var same=[];
	var newA=[];
	var newB=objectB.value;
	for (var i=0;i<collectionA.length;i++){
		newA.push(collectionA[i].key);
	}
	for (var j=0;j<newA.length;j++){
		for (var k=0;k<newB.length;k++){
			if (newA[j]==newB[k]){
				same.push(newA[j]);
			}
		}
	}
	return same;
}
