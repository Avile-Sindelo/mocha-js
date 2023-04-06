describe('The Transport Fee' , function(){
    it("should test the 'transportFee' function of the past bootcamp" , function(){
        assert.equal(transportFee('nightshift'), 'free');
        assert.equal(transportFee('morning'), 'R20');
    });

});