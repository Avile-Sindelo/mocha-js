describe('Registration check' , function(){
    it("should test whether or not the provided registration id from the provided city" , function(){
        assert.equal(regCheck('345 657 GP', 'GP'), true);
    });

    it("should test what the function does if the parameter and/or the pattern are not strings of text" , function(){
        assert.equal(regCheck('345 657 GP', 2), 'Please make sure your registration and pattern are each a string of text');
    });

    it("should test what the function does if the registration is not from the specified town" , function(){
        assert.equal(regCheck('CJ 305 980', 'CA'), false);
    });
});