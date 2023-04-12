function isFromBellville(registration){
	//Make sure the param is a string, like how all registrations should be
	if(typeof registration !== 'string'){
		return 'Please enter a registration of the correct format!'
	}

	//Make sure the registration is not an empty string
	if(registration === '' || registration === ' '){
		return 'A registration cannot be empty like that'
	} else {
		return registration.startsWith('CY');
	}
	
}