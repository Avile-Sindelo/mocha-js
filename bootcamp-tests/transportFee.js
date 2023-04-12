function transportFee(shift){
  //Make sure that the parameter is of the correct type
  if(typeof shift !== 'string'){
    return 'Please make sure you provide the NAME of the shift, a string of text.'
  }

  switch(shift){
    case 'morning':
      return 'R20';
      break;
      
    case 'afternoon':
      return 'R10';
      break;
      
    case 'nightshift':
      return 'free';
      break;
      
    default:
      return 'Please enter the appropriate work shift';
      break;
  }
}