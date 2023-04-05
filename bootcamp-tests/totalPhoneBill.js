function totalPhoneBill(services){
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