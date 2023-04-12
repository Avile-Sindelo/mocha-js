function findItemsOver(itemList, threshold){
  var itemsOverThreshold = [];
  //Make sure the threshold is a number
  if(typeof threshold != 'number'){
    return 'Please make sure you provide a threshold of the correct type -  a number'
  }
  for(var i = 0; i < itemList.length; i++){
	if(itemList[i].qty > threshold){
      itemsOverThreshold.push(itemList[i]);
    }
  }
  return itemsOverThreshold;
}