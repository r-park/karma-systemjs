import lettersOnlyValidator from './letters-only-validator.js';


describe("Letters-only validator", function(){

  let validator = lettersOnlyValidator;


  it("should be true", function(){
    expect(validator.isValid('Hello')).toBe(true);
  });


  it("should be false", function(){
    expect(validator.isValid('98052')).toBe(false);
  });

});
