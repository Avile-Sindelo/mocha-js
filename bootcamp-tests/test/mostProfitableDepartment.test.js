describe('Most profitable department' , function(){
    it("should test whether or not the function returns the name of the department that has made the most amount of money from the provided dataset" , function(){
        var salesData = [
            {department : 'hardware', sales : 4500, day : 'Monday'},
            {department : 'outdoor', sales : 1500, day : 'Monday'},
            {department : 'carpentry', sales : 5500, day : 'Monday'},
            {department : 'hardware', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'hardware', sales : 1500, day : 'Wednesday'},
            {department : 'outdoor', sales : 8507, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
            {department : 'hardware', sales : 12000, day : 'Thursday'},
            {department : 'outdoor', sales : 18007, day : 'Thursday'},
            {department : 'carpentry', sales : 6109, day : 'Thursday'},
            {department : 'hardware', sales : 7005, day : 'Friday'},
            {department : 'outdoor', sales : 12006, day : 'Friday'},
            {department : 'carpentry', sales : 16109, day : 'Friday'},
        ];

        var salesData2 = [
            {department : 'electronics', sales : 4500, day : 'Monday'},
            {department : 'outdoor', sales : 1500, day : 'Monday'},
            {department : 'carpentry', sales : 5500, day : 'Monday'},
            {department : 'steelwork', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'hardware', sales : 1500, day : 'Wednesday'},
            {department : 'outdoor', sales : 8507, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
            {department : 'hardware', sales : 12000, day : 'Thursday'},
            {department : 'carpentry', sales : 6109, day : 'Thursday'},
            {department : 'hardware', sales : 7005, day : 'Friday'},
            {department : 'electronics', sales : 12006, day : 'Friday'},
            {department : 'electronics', sales : 16109, day : 'Saturday'},
            {department : 'steelwork', sales : 7500, day : 'Tuesday'},
            {department : 'outdoor', sales : 2505, day : 'Tuesday'},
            {department : 'carpentry', sales : 1540, day : 'Tuesday'},
            {department : 'steelwork', sales : 1500, day : 'Wednesday'},
            {department : 'carpentry', sales : 8009, day : 'Wednesday'},
        ];

        var salesData3 = [
            {department: 'automobile',  sales: 1500, day: 'Tuesday'},
            {department: 'liquor',      sales: 1200, day: 'Monday'},
            {department: 'computing',   sales: 2000, day: 'Friday'},
            {department: 'food',        sales: 1500, day: 'Friday'},
            {department: 'liquor',      sales: 3000, day: 'Thursday'},
            {department: 'automobile',  sales: 3400, day: 'Monday'},
            {department: 'liquor',      sales: 43400, day: 'Monday'},
            {department: 'computing',   sales: 25000, day: 'Wednesday'},
            {department: 'computing',   sales: 4000, day: 'Friday'},
            {department: 'liquor',      sales: 5000, day: 'Tuesday'},
            {department: 'food',        sales: 23000, day: 'Thursday'},
            {department: 'food',        sales: 5423, day: 'Friday'},
            {department: 'automobile',  sales: 4000, day: 'Tuesday'},
            {department: 'computing',   sales: 9000, day: 'Monday'},
            {department: 'liquor',      sales: 10000, day: 'Friday'}
        ];
        
        assert.equal(mostProfitableDepartment(salesData), 'outdoor');
        assert.equal(mostProfitableDepartment(salesData2), 'electronics');
        assert.equal(mostProfitableDepartment(salesData3), 'liquor');
    });

});