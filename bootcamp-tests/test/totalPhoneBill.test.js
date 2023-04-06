describe('Total Phone Bill' , function(){
    it("should test the 'totalPhoneBill' function of the past bootcamp" , function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
        assert.equal(totalPhoneBill('call, sms'), 'R3.40');
        assert.equal(totalPhoneBill('call, call'), 'R5.50');
    });

});