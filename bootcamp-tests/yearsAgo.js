function yearsAgo(year){
  const date = new Date();
  //Make sure the year parameter is in the correct format
  if(typeof year != 'number'){
    return 'Please enter a year of the correct format';
  }

  //Make sure the parameter is not from the future
  if(year > date.getFullYear()){
    return 'This function expects a year in the past as a parameter, not a year in the future'
  } else {
    return date.getFullYear() - year;
  }
  
}