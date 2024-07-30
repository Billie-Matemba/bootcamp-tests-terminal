import assert from "assert";
import {fromWhere} from '../fromWhere.js';



describe('fromWhere Test' , function(){
    it("It should return 'Bellville' when called with a reg number that starts with 'CY'" , function(){
        assert.equal(fromWhere("CY 567489"), "Bellville");   
    });
    it("It should return 'Paarl' when called with a reg number that starts with 'CJ'" , function(){
        assert.equal(fromWhere("CJ 567489"), "Paarl");   
    });

    it("It should return 'Cape Town' when called with a reg number that starts with 'CA'" , function(){
        assert.equal(fromWhere("CA 567489"), "Cape Town");   
    });

    it("It should return 'Some other place!' when called with a reg number that does not starts with 'CY, CJ and CA'" , function(){
        assert.equal(fromWhere("UZ 567489"), "Some other place!");   
    });
});