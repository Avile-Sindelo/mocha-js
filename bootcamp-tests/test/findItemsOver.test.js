describe('Find Items over' , function(){
    it("should test if the function returns a list of all the items that have a quantity property greater than the provided threshold" , function(){
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
        assert.deepEqual(findItemsOver(itemList, 1), itemList);
        assert.deepEqual(findItemsOver(itemList, 30), [{name: 'pears', qty: 37}]);
    });

});