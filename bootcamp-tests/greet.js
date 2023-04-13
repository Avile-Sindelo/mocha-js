function greet(neighbor){
	//Make sure the name of the neighbor is a string
	if(typeof neighbor != 'string'){
		return 'This function expects names of people to be strings of text'
	}

	//Make sure the parameter is not empty
	if(neighbor == ' ' || neighbor == ''){
		return 'Please pass a name to the function'
	}
	return 'Hello '+neighbor;
}

console.log(greet('Sibulele'));