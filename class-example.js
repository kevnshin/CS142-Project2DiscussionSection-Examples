console.log("Running class-example.js");

/**
 * [Rectangle class]
 * @param {number} width - width of rectangle
 * @param {number} length - length of rectangle
 */

// This defines the constructor for the class Rectangle
// In JS, we denote classes with CamelCase (CapitalizeAllWords)
function Rectangle(width, length) {
  // save the parameters as properties of the Rectangle's function object
  // 'this' refers to the 'Rectacle' object
  this.width = width;
  this.length = length;
}

/**
 * getArea - returns the area of the rectangle
 */

// this is a method added to Rectangle class
Rectangle.prototype.getArea = function () {
  // notice here that since this is a method
  // of the Rectangle class, it has access to its properties
  // without explicitly passing them in as parameters 
  return this.width * this.length;
}

// a new instance of a class is created with the 'new' keyword
// here, we create three different instances
// each instance has access to the properties 'length' and 'width'
// it also has access to the getArea() method
var square = new Rectangle(5, 5);
var rect1 = new Rectangle(3, 4);
var rect2 = new Rectangle(2, 4);

// An example of accessing those methods
console.log("Square side length:",square.width);
console.log("Square area: " + square.getArea());

console.log("rect1 width:",rect1.width);
console.log("rect1 length:",rect1.length);
console.log("rect1 area: " + rect1.getArea());