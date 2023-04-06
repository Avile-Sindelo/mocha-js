describe('From where' , function(){
    it("should test the 'fromWhere' function of the past bootcamp" , function(){
        assert.equal(fromWhere('CJ 453643'), 'Paarl');
        assert.equal(fromWhere('CA 489374'), 'Cape Town');
        assert.equal(fromWhere('JGT 583 EC'), 'Some other place!')
    });

});