import assert from "assert";
import {greet} from '../greet.js';


describe('greet Test' , function(){
    it("should return 'Hello, Billie' when called with 'Billie'" , function(){
        assert.equal(greet('Billie'), 'Hello, Billie', "this should be true");
    });
    it("should return 'Hello, Thabo' when called with 'Thabo'" , function(){
        assert.equal(greet('Thabo'), 'Hello, Thabo', "this should be true");
    });

    it("should return 'Hello, Mark' when called with 'Thabo'" , function(){
        assert.equal(greet('Mark'), 'Hello, Mark', "this should be true");
    });
});