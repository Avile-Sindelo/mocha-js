describe('Count all Paarl' , function(){
    it("should test the 'countAllPaarl' function of the past bootcamp" , function(){
        assert.equal(countAllPaarl('CJ 342 434, CY 909 893, CJ 839 754, CJ 973 034'), 3);
        assert.equal(countAllPaarl('CA 049 942, CY 938 798, CAA 989 223, CJ 990 232, CK 873 028, CJ 667 009'), 2);
    });

});