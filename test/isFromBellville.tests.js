import assert from "assert";
import {isFromBellville} from '../isFromBellville.js';


describe('isFromBellville Test' , function(){
    it('should return "true" when called with a reg number that starts with "CY"' , function(){
        assert.equal(isFromBellville("CY 123"), true);

    });

    it('should return "false" when called with a reg number that  does not starts with "CY"' , function(){
        assert.equal(isFromBellville("Cj 123"), false);

    });

});
