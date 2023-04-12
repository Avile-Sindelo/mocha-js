describe('Count all from town' , function(){
    it("should test if the function returns the correct number of registrations belonging to the specified town" , function(){
        assert.equal(countAllFromTown('CJ 342 434, CY 909 893, CJ 839 754, CJ 973 034', 'CJ'), 3);
        assert.equal(countAllFromTown('CK 532 904, CY 745 363, CA 456 734, CAA 456 345', 'CA'), 2);
        assert.equal(countAllFromTown(' DHK 892 EC, HSK 454 EC, CA 323 535, FGG 865 EC, FXB 787 EC', 'EC'), 4)
    });


    it("should test what happens when the function receives an empty 'town' parameter" , function(){
        assert.equal(countAllFromTown('CJ 342 434, CY 909 893, CJ 839 754, CJ 973 034', ' '), 0);
    });

    it("should test what the function does when a number is passed as town instead of a string" , function(){
        assert.equal(countAllFromTown('CJ 342 434, CY 909 893, CJ 839 754, CJ 973 034', 5), 'Please enter the correct town format!');
       
    });


});