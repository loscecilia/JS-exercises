'use strict';

function printReceipt(inputs) {
    var items = [];
    for(var j = 0; j < 3; j++){
      items[j] = {};
      items[j].count = 0;
    }
    for(var i = 0; i < inputs.length; i++){
      if(inputs[i].barcode === 'ITEM000000'){
        items[0].barcode = inputs[i].barcode;
        items[0].name = inputs[i].name;
        items[0].unit = inputs[i].unit;
        items[0].price = inputs[i].price;
        items[0].count ++;
      }
      else if(inputs[i].barcode === 'ITEM000001'){
        items[1].barcode = inputs[i].barcode;
        items[1].name = inputs[i].name;
        items[1].unit = inputs[i].unit;
        items[1].price = inputs[i].price;
        items[1].count ++;
      }
      else if(inputs[i].barcode === 'ITEM000004'){
        items[2].barcode = inputs[i].barcode;
        items[2].name = inputs[i].name;
        items[2].unit = inputs[i].unit;
        items[2].price = inputs[i].price;
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

