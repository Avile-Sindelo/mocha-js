describe('The Transport Fee' , function(){
    it("should test whether or not the function returns the appropriate transport fee given a proper work shift" , function(){
        assert.equal(transportFee('nightshift'), 'free');
    });

    it("should test what the function does if the parameter in not a string" , function(){
        assert.equal(transportFee([]), 'Please make sure you provide the NAME of the shift, a string of text.');
    });

    it("should test what the function does it the parameter is not a recognized shift" , function(){
        assert.equal(transportFee('Avile'), 'Please enter the appropriate work shift');
    });

});