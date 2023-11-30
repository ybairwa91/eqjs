// +++++++++++++++DATA STRUCTURE:OBJECTS AND ARRAY++++++++++++++

// string and array
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers);

//index
console.log(listOfNumbers[2]);
console.log(listOfNumbers[0]);
console.log(listOfNumbers[2 - 1]);
console.log(listOfNumbers[2 * 1 - 1]);

//properties==evry js values have somehow properties except null

//console.log(null);
// console.log(null.length);==>null has no properties

//how to access properties===>
//.dot notation,value.exact name of value
//[] way,value[value expression]
//sometimes we forget the name or if the property is available or not then use arrayname and its prototype to find all
//SAME in case of strings

//METHODS
let doh = "Doh";
console.log(typeof doh.toUpperCase); //gives function means string has a function named toUpperCase which helps us to output something
console.log(doh.toUpperCase());

//if property is any function we call it methods
//so here toUpperCase() is a method available for both string and array

const toMakeUpper = ["a", "b", "c"];
console.log(toMakeUpper[0].toUpperCase());

//pop and push methods
let sequence = [1, 2, 3];
sequence.push(4); //add 4 in last index,argument must
console.log(sequence);
sequence.pop(); //no arguments required
console.log(sequence);

////OBJECTS
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
};
console.log(day1.squirrel); //false
console.log(day1.wolf); //undefined
day1.wolf = false; //added wolf property in object day1
console.log(day1.wolf); //now false

let description = {
  work: "went to work",
  "touched tree": "Touched a tree",
};
//we cant access spaced property using dot notation so here we go using []
// console.log(description.touched tree)
console.log(description["touched tree"]);
console.log(description.work);

//DELETE OPERATOR==unary operator delete the property
let anObject = { left: 1, right: 2 };
console.log(anObject);
//snytax
delete anObject.left;
console.log(anObject); //only right property at o index
console.log(anObject.left); //undefined,since left is deleted..

//in operator in string and object
console.log("left" in anObject); //false
console.log("right" in anObject); //true

//how many properties do objects have,here is a shortcut to check
console.log(anObjects.key());
