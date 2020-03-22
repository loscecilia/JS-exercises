'use strict';

function collectSameElements(collectionA, collectionB) {
//  在这里写代码
	var same=[];
	var collectionC=collectionB[0];
	for (var i=0;i<collectionA.length;i++){
		for (var j=0;j<collectionC.length;j++){
			if (collectionA[i]==collectionC[j]){
				same.push(collectionA[i]);
			}
		}
	}
	return same;
}
