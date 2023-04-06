describe('Is weekday' , function(){
    it("should test whether or not the day provided as a parameter is a weekday" , function(){
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Wednesday'), true);
    });
});