function isWeekday(day){
  //Make sure the parameter is a string 
  if(typeof day !== 'string'){
    return 'Please use the string format of the days of the week';
  }
  //Make sure the parameter is a valid week day to start with, regardless of weekend or not
  if(day != 'Sunday' && day != 'Monday' && day != 'Tuesday' && day != 'Wednesday' && day != 'Thursday' && day != 'Friday' && day != 'Saturday'){
    return 'Please enter a valid day of the week.';
  }

  return !day.startsWith('S');
}