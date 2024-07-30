import assert from "assert";
import {countRegNumber} from '../countRegNumber.js';


describe('countRegNumber Test' , function(){
    it('Should return the number "3" when called with 3 reg number string' , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount,3);
    });

    it('Should return the number "1" when called with 1 reg number string' , function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount,1);
    });

});