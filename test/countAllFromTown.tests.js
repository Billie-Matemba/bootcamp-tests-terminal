import assert from "assert";
import {countAllFromTown} from '../countAllFromTown.js';

describe('countAllFromTown Test' , function(){
    it('should return the number 3 when called  with the string that contains 3 different reg numbers from stellies' , function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        
        assert.equal(fromStellies, 3)  
    });

    it('should return the number 1 when called  with the string that contains 1 reg numbers from Kuilsriver' , function(){
        var fromkuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        
        assert.equal(fromkuilsriver, 1)  
    });

    it('should return the number 1 when called  with the string that contains 1 different reg numbers from Paarl' , function(){
        var fromPaarl = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ');
        
        assert.equal(fromPaarl, 1)  
    });
});