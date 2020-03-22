'use strict';

function printReceipt(inputs) {
    var totalCount = 0;
    var expectText = '***<没钱赚的商店>收据***' + '\n';
    for(var i = 0; i < inputs.length; i++){
        expectText += '名称：' + inputs[i].name + '，数量：' + inputs[i].count + inputs[i].unit + '，单价：' + inputs[i].price.toFixed(2) + '(元)，小计：' + (inputs[i].price * inputs[i].count).toFixed(2) + '(元)' + '\n';
        totalCount += inputs[i].price * inputs[i].count;
    }
    expectText += '----------------------------' + '\n' + '总计：' + totalCount.toFixed(2) + '\n' + '***************************';
    console.log(expectText);
}



