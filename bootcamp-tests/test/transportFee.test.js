describe('The Transport Fee' , function(){
    it("should test whether or not the function returns the appropriate transport fee given a proper work shift" , function(){
        assert.equal(transportFee('nightshift'), 'free');
        assert.equal(transportFee('morning'), 'R20');
        assert.equal(transportFee('dayshift'), 'Please enter the appropriate work shift');
    });

});