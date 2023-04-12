describe('Count all Paarl' , function(){
    it("should test whether or not the function returns the correct number of registrations from Paarl in the provided string list" , function(){
        assert.equal(countAllPaarl('CJ 342 434, CY 909 893, CJ 839 754, CJ 973 034'), 3);
        assert.equal(countAllPaarl('CA 049 942, CY 938 798, CAA 989 223, CJ 990 232, CK 873 028, CJ 667 009'), 2);
    });


     it("should test what the function does if there is no registration from Paarl" , function(){
        assert.equal(countAllPaarl('DFG 789 GP, CY 342 864, DYV 073 EC, KLM 455 FS, HTT 378 MP'), 0);
    });

     it("should test what the function does if there is no list to search from" , function(){
        assert.equal(countAllPaarl(''), 0);
    });

});