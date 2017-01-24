"use strict";

console.log("Running scope-example.js");

//'a' declared and assigned in global scope 
var a = 4;

sample1();
sample2();
console.log('"a" after the functions', a);

// Also note how we are calling the functions up above in the code before defining them down below.
// That's because JS "hoists" these function declarations to the top before executing the code

function sample1() {
  // sample1() function defies a new scope block
  // when an unseen variable is used, JS will check the scope of
  // sample1() to see if it has been declared there.
  // If not, it will go up one level back to the global scope and check there.
  // We know 'a' was defined in the global scope, so the 'a' here is from that scope and 
  // is being reassigned to 5
  a = 5;
  console.log('first "a" in sample1():', a); //expect 5

  // if we define 'var a' in this scope but below the 'a=5' assignment, 
  // 
  // the var declaration 'var a = 7' will get hoisted to the top of this current scope (sample1()) so that
  // you will have 'a' scoped specifically to the function sample1() but the assignment of 'a = 7' won't happen until below
  // And the 'a=5' will be referring to this new 'a' you've created
  // ALSO: the globally scoped 'a' will not have been reassigned so line 12 should log 4
  var a = 7;
  console.log('second "a" in sample1():', a); // expect 7

}
function sample2(argument) {
  // With the 'var' keyword, we are introducing a new variable 'a' that is scoped to sample2() and
  // any child scopes if we were to create any
  var a = 8; 
  console.log('"a" in sample2():', a); //expect 8
}