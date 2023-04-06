describe('Is the car from Bellville' , function(){
    it("should return true or false depending on whether the car is from Bellville or not respectively" , function(){
        assert.equal(isFromBellville('CY 343543'), true);
        assert.equal(isFromBellville('CA 345 445'), false);
        assert.equal(isFromBellville('DJG 344 GP'), false);
    });

});