describe('From where' , function(){
    it("should test if the function returns the correct city name into which the registration belongs" , function(){
        assert.equal(fromWhere('CJ 453643'), 'Paarl');
        assert.equal(fromWhere('CA 489374'), 'Cape Town');
        assert.equal(fromWhere('JGT 583 EC'), 'Some other place!')
    });

    it("should test what happens if a non-string parameter has been passed to its call" , function(){
        assert.equal(fromWhere([]), 'Please use the correct registration format!');
    });

    it("should test what happens if the parameter is an empty string" , function(){
        assert.equal(fromWhere(''), 'There is no list to search from');
    });
});