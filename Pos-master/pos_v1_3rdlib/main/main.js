'use strict';

function printReceipt(inputs) {
  var item;
  var sum = 0;
  var allitems = loadAllItems();
  var item_barcode;
  var barcode_list = [];
  var cart_list = [];
  var item_list = [];
  var save = 0;

  //获取输入的barcode列表
  for(var i =0;i<inputs.length;i++){
    item_barcode = inputs[i];
    if (inputs[i].length === 10){
      barcode_list.push(item_barcode);
    }
    else {
      item_barcode = inputs[i].substr(0,10);
      barcode_list.push(item_barcode);  //-2push两次
      barcode_list.push(item_barcode);
    }
  }

  //获取商品信息列表
  for (var i=0;i<barcode_list.length;i++){
    for (var j = 0;j<allitems.length;j++){
      item = allitems[j];
      if(allitems[j].barcode === barcode_list[i]){
        cart_list.push(item);
      }
    }
  }

  //添加count
  for (var i = 0; i < cart_list.length; i++){
    item = cart_list[i];
    if (item_list.length === 0){
      item.count = 1;
      item_list.push(item);
    }
    else {
      for (var j = 0;j < item_list.length; j++){
        if(cart_list[i] === item_list[j]){
          item.count++;
        }
        else if (j === item_list.length - 1){
          item_list.push(item);
          item.count = 0;
        }
      }
    }

  }

  var expectText = '***<没钱赚商店>收据***';
  for(var i = 0; i<item_list.length; i++){
    //计算省下来的钱
    if (item_list[i].count>=3){
      save = save + parseInt(item_list[i].count/3)*item_list[i].price;
    }
    expectText = expectText+'\n'+'名称：'+item_list[i].name+'，'+'数量：'+item_list[i].count+item_list[i].unit+'，'+'单价：'+item_list[i].price.toFixed(2)+'(元)'+'，'+'小计：'+(item_list[i].count-parseInt(item_list[i].count/3))*item_list[i].price+'.00(元)';
    sum+=(item_list[i].count-parseInt(item_list[i].count/3))*item_list[i].price;
  }
  expectText=expectText+'\n'+'----------------------'+'\n'+'总计：'+sum+'.00(元)'+'\n'+'节省：'+save.toFixed(2)+'(元)'+'\n'+'**********************';
  console.log(expectText);

}
