describe('Count registration numbers' , function(){
    it("should test if the function returns the correct number of registrations in the list" , function(){
        assert.equal(countRegNumber('CY 340245, CA 829489, CAA 340934, CJ 304903, CJ 498095'), 5);
    });

    it("should test what the function does if there is no list to count from" , function(){
        assert.equal(countRegNumber(''), 0);
    });


    it("should test what the function does if the given parameter is not a string" , function(){
        assert.equal(countRegNumber(4), 'Please enter a STRING list of registrations.');
    });
});