describe('Greet' , function(){
    it('should test the properly greets the neighbor' , function(){
        assert.equal(greet('Sibulele'), 'Hello Sibulele');
    });

    it('should test what the function does if the neighbor/s name is not a string', function(){
        assert.equal(greet(9), 'This function expects names of people to be strings of text');
    });

    it('should test what happens when the function is is given no name to greet', function(){
        assert.equal(greet(' '), 'Please pass a name to the function');
    });

});