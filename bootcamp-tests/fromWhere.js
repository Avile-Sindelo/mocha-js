function fromWhere(registration){
  //Make sure the registration is a string
  if(typeof registration !== 'string'){
    return 'Please use the correct registration format!';
  }

  //Make sure the parameter is not an empty string
  if(registration === '' || registration == ' '){
    return 'There is no list to search from'
  }

  if(registration.startsWith('CJ')){
	return 'Paarl';
  } else if(registration.startsWith('CY')){
    return 'Bellville';
  } else if(registration.startsWith('CA')){
    return 'Cape Town';
  } else { 
    return 'Some other place!';
  }
}