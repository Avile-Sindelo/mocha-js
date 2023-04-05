describe('Bootcamp function tests' , function(){
    it("should test the 'totalPhoneBill' function of the past bootcamp" , function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
    });

});