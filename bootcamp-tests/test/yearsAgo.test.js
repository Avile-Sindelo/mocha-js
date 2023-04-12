describe('Years Ago' , function(){
    it("should test if the function returns the correct number of years since the year provided as a parameter and the current year" , function(){
        assert.equal(yearsAgo(2010), 13);
    });

    it("should test what the function does if the year parameter is not a number type" , function(){
        assert.equal(yearsAgo('2010'), 'Please enter a year of the correct format');
    });

    it("should test what happens to the function if the year parameter in the future" , function(){
        assert.equal(yearsAgo(2050), 'This function expects a year in the past as a parameter, not a year in the future');
    });


});