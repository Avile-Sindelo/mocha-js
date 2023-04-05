describe('Bootcamp function tests' , function(){
    it("should test the 'countAllFromTown' function of the past bootcamp" , function(){
        assert.equal(countAllFromTown('CJ 342 434, CY 909 893, CJ 839 754, CJ 973 034', 'CJ'), 3);
    });

});