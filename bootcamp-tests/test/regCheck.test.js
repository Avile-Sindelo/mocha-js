describe('Registration check' , function(){
    it("should test the 'regCheck' function of the past bootcamp" , function(){
        assert.equal(regCheck('345 657 GP', 'GP'), true);
        assert.equal(regCheck('DYV 545 EC', 'EC'), true);
        assert.equal(regCheck('CA 256 957', 'CA'), true);
        assert.equal(regCheck('CJ 305 980', 'CA'), false);
    });

});