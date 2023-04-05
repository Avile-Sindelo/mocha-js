function countAllFromTown(regList, town){
	let listOfRegs = regList.split(',');
	let count = 0;

	for(let i = 0; i < listOfRegs.length; i++){
		if(listOfRegs[i].trim().startsWith(town)){
			count = count + 1;
		}
	}
	
	return count;
}