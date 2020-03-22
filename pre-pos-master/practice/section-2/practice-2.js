'use strict';

function countSameElements(collection) {
// 在此写代码
	if (collection[i].length>1)
		
	var newCollection=[
	{key:'a',count:0},
	{key:'e',count:0},
	{key:'h',count:0},
	{key:'t',count:0},
	{key:'f',count:0},
	{key:'c',count:0},
	{key:'g',count:0},
	{key:'b',count:0},
	{key:'d',count:0}
	];
	for (var j=0;j<9;j++)
		for(var i=0;i<collection.length&&collection[i]!='\0';i++)
			if (collection[i]==newCollection[j].key)
				newCollection[j].count++;

	return newCollection;
}
