import assert from "assert";
import {regCheck} from '../regCheck.js';

describe('regCheck Test' , function(){
    it('should return true if number plate ends with "GP" and false if it does not' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });
    it('should return true if number plate ends with "L" and false if it does not' , function(){
        assert.equal(regCheck('5566 L', 'L'), true);
        assert.equal(regCheck('5566 L', 'M'), false);
        
    });
    it('should return true if number plate ends with "EC" and false if it does not' , function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);

    });

});