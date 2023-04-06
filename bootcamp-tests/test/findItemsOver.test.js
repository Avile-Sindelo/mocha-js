describe('Find Items over' , function(){
    it("should test the 'findItemsOver' function of the past bootcamp" , function(){
        let itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

        let results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];

        assert.deepEqual(findItemsOver(itemList, 20), results);
    });

});