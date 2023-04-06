describe('Is the car from Bellville' , function(){
    it("should test the 'isFromBellville' function of the past bootcamp" , function(){
        assert.equal(isFromBellville('CY 343543'), true);
        assert.equal(isFromBellville('CA 345 445'), false);
    });

});