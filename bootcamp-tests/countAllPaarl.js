function countAllPaarl(listOfRegs){
	let arr = listOfRegs.split(','); 
	let count = 0;
	for(let i = 0; i < arr.length; i++){
		if(arr[i].trim().startsWith('CJ')){
			count = count + 1;
		}
	}

	return count;
}