function printReceipt(tags) {
  let allItems = loadAllItems();
  let cartItems = buildCartItems(tags, allItems);
  let promotions = loadPromotions();
  let receiptItems = buildReceiptItems(cartItems, promotions);
  let receiptTotal = receiptItemsTotal(receiptItems);
  let receipt = getReceipt(receiptTotal);
  console.log(receipt);
}
function buildCartItems(tags, allItems) {
  let cartItems = [];
  for (let tag of tags) {
    let tagArray = tag.split('-');
    let barcode = tagArray[0];
    let count = tagArray.length > 1 ? parseFloat(tagArray[1]) : 1;
    let cartItem = cartItems.find(cartItem=>barcode === cartItem.item.barcode);
    if (cartItem) {
      cartItem.count += count;
    } else {

      let allItem = allItems.find(allItem=>barcode === allItem.barcode);
      cartItems.push({item: allItem, count: count});
    }
  }
  return cartItems;
}

function buildReceiptItems(cartItems, promotions) {
  return cartItems.map(cartItem=> {
    let promotionType = getPromotionType(cartItem.item.barcode, promotions);
    let {saved, subtotal} = discount(cartItem, promotionType);
    return {cartItem, saved, subtotal};
  });
}
function getPromotionType(barcode, promotions) {
  let promotion = promotions.find(promotion=>promotion.barcode.includes(barcode));
  return promotion ? promotion.type : '';
}
function discount(cartItem, promotionType) {

  let freeItemCount = 0;
  if (promotionType) {
    freeItemCount = parseInt(cartItem.count / 3);
  }
  let saved = freeItemCount * cartItem.item.price;
  let subtotal = cartItem.item.price * cartItem.count - saved;
  return {saved, subtotal};
}
function receiptItemsTotal(receiptItems) {

  let [savedTotal,itemsTotal]=[0, 0];
  for (let receiptItem of receiptItems) {
    savedTotal += receiptItem.saved;
    itemsTotal += receiptItem.subtotal;
  }
  return {receiptItems, savedTotal, itemsTotal};

}

function getReceipt(receiptItemsTotal) {
  let itemsText = receiptItemsTotal.receiptItems.map(receiptItem=> {
    const cartItem = receiptItem.cartItem;
    return `名称：${cartItem.item.name}，\
数量：${cartItem.count}${cartItem.item.unit}，\
单价：${formatMoney(cartItem.item.price)}(元)，\
小计：${formatMoney(receiptItem.subtotal)}(元)`;
  }).join('\n');
  return `***<没钱赚商店>收据***
${itemsText}
----------------------
总计：${formatMoney(receiptItemsTotal.itemsTotal)}(元)
节省：${formatMoney(receiptItemsTotal.savedTotal)}(元)
**********************`;
}

function formatMoney(money) {
  return money.toFixed(2);








// function printReceipt(inputs) {
//
//   var sum = 0;
//   var allItems = loadAllItems();
//
//   var save = 0;
//   var cartItems = bulidCartItems(inputs,allItems);


  // var expectText = '***<没钱赚商店>收据***';
  // for(var i = 0; i<item_list.length; i++){
  //   //计算省下来的钱
  //   if (item_list[i].count>=3){
  //     save = save + parseInt(item_list[i].count/3)*item_list[i].price;
  //   }
  //   expectText = expectText+'\n'+'名称：'+item_list[i].name+'，'+'数量：'+item_list[i].count+item_list[i].unit+'，'+'单价：'+item_list[i].price.toFixed(2)+'(元)'+'，'+'小计：'+(item_list[i].count-parseInt(item_list[i].count/3))*item_list[i].price+'.00(元)';
  //   sum+=(item_list[i].count-parseInt(item_list[i].count/3))*item_list[i].price;
  // }
  // expectText=expectText+'\n'+'----------------------'+'\n'+'总计：'+sum+'.00(元)'+'\n'+'节省：'+save.toFixed(2)+'(元)'+'\n'+'**********************';
  // console.log(expectText);

}
// function bulidCartItems(inputs,allItems) {
//   var item;
//   var item_barcode;
//   var barcode_list = [];
//   var cart_list = [];
//   var item_list = [];
//   //获取输入的barcode列表
//   for(var i =0;i<inputs.length;i++){
//     item_barcode = inputs[i];
//     if (inputs[i].length === 10){
//       barcode_list.push(item_barcode);
//     }
//     else {
//       item_barcode = inputs[i].substr(0,10);
//       barcode_list.push(item_barcode);  //-2push两次
//       barcode_list.push(item_barcode);
//     }
//   }
//
//   //获取商品信息列表
//   for (var i=0;i<barcode_list.length;i++){
//     for (var j = 0;j<allItems.length;j++){
//       item = allItems[j];
//       if(allItems[j].barcode === barcode_list[i]){
//         cart_list.push(item);
//       }
//     }
//   }
//
//   //添加count
//   for (var i = 0; i < cart_list.length; i++){
//     item = cart_list[i];
//     if (item_list.length === 0){
//       item.count = 1;
//       item_list.push(item);
//     }
//     else {
//       for (var j = 0;j < item_list.length; j++){
//         if(cart_list[i] === item_list[j]){
//           item.count++;
//         }
//         else if (j === item_list.length - 1){
//           item_list.push(item);
//           item.count = 0;
//         }
//       }
//     }
//     return item_list;
//   }
// }
