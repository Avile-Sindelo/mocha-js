describe('Years Ago' , function(){
    it("should test the 'yearsAgo' function of the past bootcamp" , function(){
        assert.equal(yearsAgo(2010), 13);
        assert.equal(yearsAgo(2020), 3);
        assert.equal(yearsAgo(1973), 50);
    });

});