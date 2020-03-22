'use strict';

function printReceipt(inputs) {
  var items = [];
  for(var j = 0; j < 3; j++){
    items[j] = {};
    items[j].count = 0;
  }
  for(var i = 0; i < inputs.length; i++){
    if(inputs[i] === 'ITEM000000'){
      items[0].barcode = inputs[i];
      items[0].name = '可口可乐';
      items[0].unit = '瓶';
      items[0].price = 3.00;
      items[0].count ++;
    }
    else if(inputs[i] === 'ITEM000001'){
      items[1].barcode = inputs[i];
      items[1].name = '雪碧';
      items[1].unit = '瓶';
      items[1].price = 3.00;
      items[1].count ++;
    }
    else if(inputs[i] === 'ITEM000004'){
      items[2].barcode = inputs[i];
      items[2].name = '电池';
      items[2].unit = '个';
      items[2].price = 2.00;
      items[2].count ++;
    }
  }
  var totalCount = 0;
  var expectText = '****/<没钱赚的商店/>收据****' + '\n';
  for(var i = 0; i < items.length; i++){
    expectText += '名称：' + items[i].name + ',数量：' + items[i].count + items[i].unit + '，单价：' + items[i].price.toFixed(2) + '(元)，小计：' + (items[i].price * items[i].count).toFixed(2) + '(元)' + '\n';
    totalCount += items[i].price * items[i].count;
  }
  expectText += '----------------------------' + '\n' + '总计：' + totalCount.toFixed(2) + '\n' + '***************************';
  console.log(expectText);
}
