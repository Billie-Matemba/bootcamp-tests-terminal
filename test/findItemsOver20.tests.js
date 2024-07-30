import assert from "assert";
import {findItemsOver20} from '../findItemsOver20.js';


describe('findItemsOver20 Test' , function(){
    it("Should return result var that have quantity higher than 20 " , function(){
        
        var list = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        
        var result = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];

        assert.deepEqual(result, findItemsOver20(list));
    });

    it("Should return result2 var without quantity higher than 20 " , function(){
        
        var list2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];
        
        var results2 = [];
        assert.deepEqual(results2, findItemsOver20(list2));
       
    });

});