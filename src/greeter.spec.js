import Greeter from './greeter.js';


describe("Greeter", function(){

  it("should greet", function(){
    var greeter = new Greeter('Richard');
    expect(greeter.greet()).toBe('Hello Richard, how are you?');
  });

});
