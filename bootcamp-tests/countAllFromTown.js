function countAllFromTown(regList, town){
	let listOfRegs = regList.split(',');
	let count = 0;

	if(typeof town != 'string'){
		count = 'Please enter the correct town format!';
	}

	for(let i = 0; i < listOfRegs.length; i++){
		if(listOfRegs[i].trim().startsWith(town) || listOfRegs[i].trim().endsWith(town)){
			count = count + 1;
		}
	}
	
	return count;
}