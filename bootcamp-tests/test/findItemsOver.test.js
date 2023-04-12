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
        
        
    });

    it("should test what the function does if an empty list is passed into it" , function(){
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

        assert.deepEqual(findItemsOver([], 30), []);
    });


    it("should test what happens if the threshold is not a number" , function(){
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


        assert.deepEqual(findItemsOver(itemList, 'Avile'), 'Please make sure you provide a threshold of the correct type -  a number');
    });
});