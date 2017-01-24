console.log("Running callback-example.js");


/**
 * [add] - adds 2 numbers
 * @param {[type]}   a - first number
 * @param {[type]}   b - second number
 * @param {Function} callback (optional) - callback function to be run when addition is complete
 */

// When we define the add() function, we don't define the callback function
// We just define what the callback function should accept as parameters
// You can see here, we will take any function as the callback function in the third parameter
// And we will always call it with the sum of 'a' and 'b'
function add(a, b, callback) {
  var c = a + b;

  // Only call callback function if provided
  // In JS, if a parameter is not passed in, it's defaultly set to 'undefined'
  // Example user calls add function as 'add(5, 10);', then 'callback' parameter will be 'undefined'
  if (callback !== undefined) {
    callback(c);
  }
}

// Here, we define a callback function 'cb' to be passed in
// Since we know how add() was defined and that whatever callback function gets passed in gets called with
// the sum as the parameter, that's how we 'cb' here.
function cb (sum) {
  console.log("The sum is: " + sum);
}


var num1 = 10;
var num2 = 20;

add(num1, 6, cb);

// We can also pass in an 'anonymous' (AKA unnamed) function as the third parameter
// This is similar to how we pass in the callback function on the specs web page.
add(num1, num2, function () {
  console.log("The sum is: " + sum);
});