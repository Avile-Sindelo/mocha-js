function findItemsOver(itemList, threshold){
  var itemsOverThreshold = [];
  for(var i = 0; i < itemList.length; i++){
	if(itemList[i].qty > threshold){
      itemsOverThreshold.push(itemList[i]);
    }
  }
  return itemsOverThreshold;
}