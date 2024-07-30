import assert from "assert";
import {totalPhoneBill} from '../totalPhoneBill.js';

describe('totalPhoneBill Test' , function(){
    it('should calculate the total data when it takes in a string of calls made and sms sent  ' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));  
    });

    it('should calculate the total data when it takes in a string of one call and one sms' , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });

    it('should calculate the total bill when it takes in a string of two sms' , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });  

});