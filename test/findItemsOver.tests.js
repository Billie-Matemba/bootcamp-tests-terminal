import assert from "assert";
import {findItemsOver} from '../findItemsOver.js';


describe('findItemsOver Test', function() {
    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    
    var results = [
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
    ];
    
    var itemList2 = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 19},
        {name : 'bananas', qty : 17},
        {name : 'apples', qty : 3},
    ];
    
    var results2 = [];
    
    var itemList3 = [
        {name : 'apples', qty : 40},
        {name : 'pears', qty : 20},
        {name : 'bananas', qty : 23},
        {name : 'apples', qty : 37}
    ];
    
    var results3 = [
        {name : 'apples', qty : 40},
        {name : 'bananas', qty : 23},
        {name : 'apples', qty : 37}
    ];
    
    it('should return the expected result for itemList', function() {
      const threshold = 20;
      const actualResult = findItemsOver(itemList, threshold);
      assert.deepEqual(actualResult, results);
    });
  
    it('should return an empty array for itemList2', function() {
      const threshold = 20;
      const actualResult = findItemsOver(itemList2, threshold);
      assert.deepEqual(actualResult, results2);
    });
  
  
  });