describe('Count registration numbers' , function(){
    it("should test the 'countRegNumber' function of the past bootcamp" , function(){
        assert.equal(countRegNumber('CY 340245, CA 829489, CAA 340934, CJ 304903, CJ 498095'), 5);
        assert.equal(countRegNumber('CAA 483 534, 894 453 GP, JHD 787 EC, CJ 892 783, CK 898 294, CY 048 884'), 6);
        assert.equal(countRegNumber('CA 780 303, CY 783 990'), 2);
        assert.equal(countRegNumber('DYV 037 EC'), 1);
    });

});