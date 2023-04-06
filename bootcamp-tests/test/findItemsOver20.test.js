describe('Find items over 20' , function(){
    it("should test the 'findItemsOver20' function of the past bootcamp" , function(){
        var itemList = [
            {
                name: 'apples',
                qty: 10
            }, 
            {
                name: 'pears',
                qty: 37
            },
            {
                name: 'bananas',
                qty: 27
            },
            {
                name: 'apples',
                qty: 3
            }
        ];


        var result = [
            {
                name: 'pears',
                qty: 37
            },
            {
                name: 'bananas',
                qty: 27
            }
        ];

        assert.deepEqual(findItemsOver20(itemList), result);
    });

});