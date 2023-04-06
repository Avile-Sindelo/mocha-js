describe('Registration check' , function(){
    it("should test whethe or not the provided registration id from the provided city" , function(){
        assert.equal(regCheck('345 657 GP', 'GP'), true);
        assert.equal(regCheck('DYV 545 EC', 'EC'), true);
        assert.equal(regCheck('CA 256 957', 'CA'), true);
        assert.equal(regCheck('CJ 305 980', 'CA'), false);
    });

});