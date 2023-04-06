describe('Years Ago' , function(){
    it("should test if the function returns the correct number of years since the year provided as a parameter and the current year" , function(){
        assert.equal(yearsAgo(2010), 13);
        assert.equal(yearsAgo(2020), 3);
        assert.equal(yearsAgo(1973), 50);
    });

});