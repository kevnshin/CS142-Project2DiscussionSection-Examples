console.log("Running closure-example.js");

function sayHello(name) {
  return function () {
    console.log("Hi", name);
  }
}

var name = "Kevin";
var hello = sayHello(name);
hello();
hello();

function powersOfTwo() {
  var initial = 1;
  var result = initial;

  var printResults = function (argument) {
    result *= 2;
    console.log(result);
  }
  return printResults;
}

var powers = powersOfTwo();
powers();
powers();
powers();
powers();