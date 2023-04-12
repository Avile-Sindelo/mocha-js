describe('Is the car from Bellville' , function(){
    it("should return true or false depending on whether the car is from Bellville or not respectively" , function(){
        assert.equal(isFromBellville('CY 343543'), true);
        assert.equal(isFromBellville('CA 345 445'), false);
        assert.equal(isFromBellville('DJG 344 GP'), false);
    });

    it("should test what happens if the function receives a non-string parameter" , function(){
        assert.equal(isFromBellville(9), 'Please enter a registration of the correct format!');
    });

    it("should test what the function does if the an empty string has been passed into the function" , function(){
        assert.equal(isFromBellville(''), 'A registration cannot be empty like that');
    });
});