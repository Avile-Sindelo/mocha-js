describe('Find items over 20' , function(){
    it("should test whether or not the function returns all the items whose quantity is greater than 20" , function(){
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

        var itemList2 = [
            {
                name: 'cars',
                qty: 21
            },
            {
                name: 'watches',
                qty: 35
            },
            {
                name: 'houses',
                qty: 10
            },
            {
                name: 'kids',
                qty: 40
            }

        ];

        var itemList3 = [
            {
                name: 'colombians',
                qty: 25
            },
            {
                name: 'germans',
                qty: 8
            },
            {
                name: 'chinesse',
                qty: 4
            },
            {
                name: 'russians',
                qty: 40
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

        var result2 = [
            {
                name: 'cars',
                qty: 21
            }, 
            {
                name: 'watches', 
                qty: 35
            },
            {
                name: 'kids', 
                qty: 40
            }
        ];

        var result3 = [
            {
                name: 'colombians', 
                qty: 25
            },
            {
                name: 'russians', 
                qty: 40
            }
        ];

        assert.deepEqual(findItemsOver20(itemList3), result3);
        assert.deepEqual(findItemsOver20(itemList2), result2);
        assert.deepEqual(findItemsOver20(itemList), result);
    });

});