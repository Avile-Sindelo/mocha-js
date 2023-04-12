describe('Is weekday' , function(){
    it("should test whether or not the day provided as a parameter is a weekday" , function(){
        assert.equal(isWeekday('Saturday'), false);
    });

    it("should test what happens when a string is passed to the function, but NOT a valid day" , function(){
        assert.equal(isWeekday('Avile'), 'Please enter a valid day of the week.');
    });

    it("should test what the funtion does if the parameter is not a string" , function(){
        assert.equal(isWeekday(0), 'Please use the string format of the days of the week');
    });
});