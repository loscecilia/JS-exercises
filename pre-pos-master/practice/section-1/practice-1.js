'use strict';

function collectSameElements(collectionA, collectionB) {
		//  在这里写代码
		var same=[];
		for (var i=0;i<collectionA.length;i++){
			for (var j=0;j<collectionB.length;j++){
				if (collectionA[i]==collectionB[j]){
					same.push(collectionA[i]);
					
				}
			}
		}
		return same;
}
