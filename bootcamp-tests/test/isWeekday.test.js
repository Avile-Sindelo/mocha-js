describe('Is weekend' , function(){
    it("should test the 'isWeekday' function of the past bootcamp" , function(){
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Monday'), true);
    });

});