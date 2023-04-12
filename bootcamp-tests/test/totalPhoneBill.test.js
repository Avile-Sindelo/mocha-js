describe('Total Phone Bill' , function(){
    it("should test if the function returns the correct total bill from a string of calls and SMSs" , function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
    });

    it("should test what the function does if the parameter is not a string" , function(){
        assert.equal(totalPhoneBill({}), 'Please enter services of the correct format.');
    });

    it("should test what the function does if a string is passed, but NOT OF THE EXPECTED SERVICES" , function(){
        assert.equal(totalPhoneBill('sleep, call, code, sleep, eat'), 'Please enter a list of valid services');
    });

});