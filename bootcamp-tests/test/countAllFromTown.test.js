describe('Count all from town' , function(){
    it("should test the 'countAllFromTown' function of the past bootcamp" , function(){
        assert.equal(countAllFromTown('CJ 342 434, CY 909 893, CJ 839 754, CJ 973 034', 'CJ'), 3);
        assert.equal(countAllFromTown('CK 532 904, CY 745 363, CA 456 734, CAA 456 345', 'CA'), 2);
    });

});