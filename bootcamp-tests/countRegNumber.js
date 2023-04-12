function countRegNumber(regList){
  //Make sure the recieved parameter is in the proper state
  if(typeof regList !== 'string'){
        return 'Please enter a STRING list of registrations.';
    }
    
  let registrations = regList.split(',');
  let count = 0;

    //registration is an array that has just one value, that's an empty string kwayona 
    if(regList === '' || regList === ' '){
      count = 0;
    } else {
      for(let i = 0; i < registrations.length; i++){
        count += 1;
      }
    }  

  return count;
}