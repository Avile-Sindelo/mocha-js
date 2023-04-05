function transportFee(shift){
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