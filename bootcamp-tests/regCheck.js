function regCheck(registration, pattern){
  //Make sure the registration is a string of text
  if(typeof registration !== 'string' || typeof pattern !== 'string'){
    return 'Please make sure your registration and pattern are each a string of text';
  } else {
    return registration.endsWith(pattern) || registration.startsWith(pattern);
  }
  
}