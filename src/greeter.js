'use strict';

export default class Greeter {

  constructor(message) {
    this.greeting = message;
  }

  greet() {
    return `Hello ${this.greeting}, how are you?`;
  }

}
