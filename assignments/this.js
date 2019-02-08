// /* The for principles of "this";
// * in your own words. explain the four principle for the "this" keyword below.
// *
// * 1. Window: All global JavaScript objects, functions, and variables are part of the window object
// * 2. Implicit: Dealts with objects. It's always the left of the invocation of the method invoked
// * 3. New: Creates a blank, plain JavaScript object; Links (sets the constructor of) this object to another object; Passes the newly created object from Step 1 as the this context;
//      Returns this if the function doesn't return its own object.
// * 4. Explicit: Whenever JavaScript’s call or apply method is used, this is explicitly defined.
// *
// * write out a code example of each explanation above
// */

// // Principle 1

// function age(number) {
//     console.log(this);
//     return number;
//   }
//   sayName(24);

// // Principle 2

// const myObj = {
//     greeting: 'Hello',
//     sayHello: function(name) {
//       console.log(`${this.greeting} my name is ${name}`);
//       console.log(this);
//     }
//   };
//   myObj.sayHello('Ryan');

// // Principle 3

// function CordialPerson(greeter) {
//     this.greeting = 'Hello ';
//     this.greeter = greeter;
//     this.speak = function() {
//       console.log(this.greeting + this.greeter);
//       console.log(this);
//     };
//   }
  
//   const jerry = new CordialPerson('Newman');
//   const newman = new CordialPerson('Jerry');
  
//   newman.speak();
//   newman.speak();

// // Principle 4

// const person = {
//     name: 'Sarah'
//   }
  
//   const hobbits = {
//     name: 'Frodo'
//   }
  
//   const skills = ['HTML', 'CSS', 'JS'];
  
//   function introduce(skills1, skills2, skills3) {
    
//     console.log(`Hello!  My name is ${this.name}, and I have skills in: ${skills1}, ${skills2}, ${skills3}`)
//   }
  
//   // call has one argument list
//   introduce.call(person, skills);
//   // apply accepts an array
//   introduce.apply(person, skills);