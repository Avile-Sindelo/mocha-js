describe('Bootcamp function tests' , function(){
    it("should test the 'countRegNumber' function of the past bootcamp" , function(){
        assert.equal(countRegNumber('CY 340245, CA 829489, CAA 340934, CJ 304903, CJ 498095'), 5);
    });

});