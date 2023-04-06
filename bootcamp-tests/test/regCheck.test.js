describe('Registration check' , function(){
    it("should test the 'regCheck' function of the past bootcamp" , function(){
        assert.equal(regCheck('345 657 GP', 'GP'), true);
    });

});