"use strict";

console.log("Running this-example.js");

// 'this' in the global context refers to the 'Window' object
// in the browser context
// when this code is run in node.js (i.e. 'node this-example.js'),
// you'll see an empty object. You don't have to know what that means yet
console.log(this);

// Example 1
function sayHI() {
  console.log("HI");
  // Case 1: As stated in the lecture slides, 'this' in a function with
  // no methods is still scoped to global context
  // Case 2: strict mode sets 'this' in a function with
  // no methods to 'undefined'
  console.log("this in sayHI()", this); // still points to window
}

sayHI();

// Example 2
function MethodFunction (property1, property2) {
  this.property1 = property1;
  this.property2 = property2;

  // 'this' refers to MethodFunction object
  console.log("this in MethodFunction()", this);
}

// IMPORTANT: 'this' only refers to MethodFunction object
//            when we create a new instance of the class
//            If we just call the class, 'this' will still
//            point to global context.
//            Uncomment the line below and try it out.

// MethodFunction("a", "b");

// *
//  * In the method of a class, 'this' still points to the class's
//  * object. In this case, 'this' is the MethodFunction object
 
// MethodFunction.prototype.concat = function () {
//   console.log("this in concat() method",this);
//   return this.property1 + this.property2;
// }

/**
 * New instance of MethodFunction.
 * You should see 'this' print out the MethodFunction object
 */

// var sampleFunction = new MethodFunction("a", "b");

/**
 * Calling a method of MethodFunction.
 * You should see 'this' print out the MethodFunction object
 */

// var concatenatedString = sampleFunction.concat();