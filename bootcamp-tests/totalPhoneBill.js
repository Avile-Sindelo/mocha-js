function totalPhoneBill(services){
  //Make sure the parameter is a string
  if(typeof services !== 'string'){
    return 'Please enter services of the correct format.'
  }

  //Make sure the string passed is a list of valid services
  if(!services.includes('call') || !services.includes('sms')){
    return 'Please enter a list of valid services';
  }
  var totalBill = 0.00;
  var servicesArray = services.trim().split(',');
  
  for(var i = 0; i < servicesArray.length; i++){
    if(servicesArray[i].trim() === 'call'){
      totalBill += 2.75;
    } else if(servicesArray[i].trim() === 'sms'){
      totalBill += 0.65;
    }
  }
  
  return 'R'+totalBill.toFixed(2);
}