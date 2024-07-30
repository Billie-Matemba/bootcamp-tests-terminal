import assert from "assert";
import {isWeekday} from '../isWeekday.js';


describe('isWeekday Test' , function(){
    it("it should return 'true'if it is Tuesday" , function(){
        assert.equal(isWeekday('Tuesday'), true, "this shoud be true");

    });
    it("it should return 'false'if it is Saturday" , function(){
        assert.equal(isWeekday('Saturday'), false, "this shoud be false");

    });
    it("it should return 'true'if it is Friday" , function(){
        assert.equal(isWeekday('Friday'), true, "this shoud be true");

    });
});