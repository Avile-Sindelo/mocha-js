/*** FIRST FUNCTION - MOST PROFITABLE DEPARTMENT **/

//Should return the most profitable department - a STRING
function mostProfitableDepartment(salesData){
    //Make sure the salesData is an Object
    if(typeof salesData !== 'object'){
      return 'Please make sure you pass a list of objects into the funciton';
    }

  	//declare an object to hold all departments with their respective totals
  	let myObj = {};
  	//declare a number to use a filter to get the department with the largest total
  	let largest = 0;
  	//declare a string variable to hold the final return value, which is the name of a department
  	let richDept = '';
  	
  	//loop through the sales data 
	   for(let i = 0; i < salesData.length; i++){
      	//if the department name is not already in the departments object
  		  if(myObj[salesData[i].department] === undefined){
            //create the department name as a property of the departments object and initialize it to a zero VALUE
          	myObj[salesData[i].department] = 0;
          }
      		
      		//if the property already exists in the object, add up the sales value from the dataset to the corresponding property in the departments object
      		myObj[salesData[i].department] += salesData[i].sales;
    }
  	
    //loop through the departments object now, that contains all the department names as properties, and the totals for each department as values of those properties
  	for(let dept in myObj){
      	//if the total of the current department is bigger than the LARGEST value, 
      	if(myObj[dept] > largest){
          	//make the total of that department to be the LARGEST
          	largest = myObj[dept];
            //record that department as the richest 
        	   richDept = dept;
        }
    }
	
  	//return the richest department
  	return richDept;
}





/*** SECOND FUNCTION - MOST PROFITABLE DAY **/

//Should return the most profitable day -  a STRING
function mostProfitableDay(salesData){
  	//an object to hold work days and their totals
  	let otherObj = {};
  	//a number to hold the value of the largest total of all the days
  	let richerDay = 0;
  	//a string to hold the final return value of the function
  	let profitableDay = '';
  	
  	//loop through the dataset
	for(let i = 0; i < salesData.length; i++){
       //if the current day does not exist in the days object as a property,
    	 if(otherObj[salesData[i].day] === undefined){
          	//create the day as a property of the days object to hold the total of that particular day, and initialize the value to zero
        	otherObj[salesData[i].day] = 0;
        }
      	
      	//if the property already exists, add up the value of the SALES from the dataset to the day's total in the days object
      	otherObj[salesData[i].day] += salesData[i].sales;
    }
  
  	//loop through the days object
  	for(let day in otherObj){
      	//if the total of the day is greater than largest total of all days,
    	  if(otherObj[day] > richerDay){
          //make that total the biggest total in the days object
        	richerDay = otherObj[day];
          	//record that day as the most profitable DAY 
          	profitableDay = day;
        }
    }
  
  	//return the most profitable day
  	return profitableDay;
}