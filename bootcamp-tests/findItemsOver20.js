function findItemsOver20(itemList){
  //Make sure the parameter is a list of objects
  if(typeof itemList != 'object'){
    return 'Please enter a proper list of items';
  }
  //Make sure the list is not empty
  if(itemList.length == 0){
    return 'The provided list is empty';
  }
  //Make sure each item in the list has a "qty" property
  for(let j = 0; j < itemList.length; j++){
    if(itemList[j].hasOwnProperty('qty')){
      continue;
    } else {
      return 'At least one of the items in the list does not have the all-important "qty" property';
    }
  }
  
  var itemsOver20 = [];
  for(var i = 0; i < itemList.length; i++){
	if(itemList[i].qty > 20){
      itemsOver20.push(itemList[i]);
    }
  }
  return itemsOver20;
}
