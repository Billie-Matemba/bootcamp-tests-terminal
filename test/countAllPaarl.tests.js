import assert from "assert";
import {allPaarl} from '../countAllPaarl.js';


describe('CountAllPaarl Test' , function(){
    it('It should return the registration numbers from paarl when it reads a string with different reg numbers' , function(){
        var regNumber = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';  
        var regNumbersForPaarl = allPaarl(regNumber); 
        assert.equal(2, regNumbersForPaarl.length);

    });

    it('It should return "CJ 678 543" registration numbers from paarl when it is called with regNumbersForPaarl[0]' , function(){
        var regNumber = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';  
        var regNumbersForPaarl = allPaarl(regNumber); 
        assert.equal('CJ 678 543', regNumbersForPaarl[0]);

    });

    it('It should return "CJ 67890" registration numbers from paarl when it is called with regNumbersForPaarl[1]' , function(){
        var regNumber = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';  
        var regNumbersForPaarl = allPaarl(regNumber); 
        assert.equal('CJ 67890', regNumbersForPaarl[1]);

    });



});