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
console.log(anObject); //only right property at 0 index
console.log(anObject.left); //undefined,since left is deleted..

//in operator in string and object to check a property is exists or not.
console.log("left" in anObject); //false
console.log("right" in anObject); //true

//Object.keys({}) method
console.log(Object.keys({ x: 0, y: 0, z: 0 }));
//return an arrays tells the properties in an object without their key values
// ["x", "y", "z"];

//Object.assign(object_name,{properties to assign})
//assign function copies all the properties from one object into another

let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
//even changes the b property value
console.log(objectA);

//INTERESTING FACT
//array are just object..how

console.log(typeof listOfNumbers); //objects

//array and objects behave like a good programme
let journal = [
  {
    events: ["work", "touched tree", "pizza", "running", "tv"],
    squirrel: false,
  },

  {
    events: [
      "work",
      "ice cream",
      "cauliflower",
      "lasagna",
      "touched tree",
      "brushed teeth",
    ],
    squirrel: false,
  },
  { events: ["weekend", "cycling", "break", "peanuts"], squirrel: true },
];
//
// Q== DOES HE BECOME squirrel on the day of doing work
for (let i = 0; i < journal.length; i++) {
  if (journal[i].events[0] === "work") {
    if (journal[i].squirrel) {
      console.log("Yes he become squirrel");
    } else console.log("No he didnot become squirrel");
  }
}

///MUTABILITY
//in case of Booleans,numbers,string we cant modify the value of the these data type and convert into something else by using any expression however u can reassign but cant change the value from "cat" to "rat".

//but u can change key pair values in objects,objects work differently how lets

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

//here two objects with same reference are equal
console.log(object1 == object2); //true

//here two different objects with same properties are not equal at all.
console.log(object1 == object3); //false

//

//here object1 and object2 binding grasp the same objects.
object1.value = 15;
//if we change value of one object it will change same for reference object as well
console.log(object1);
console.log(object2);

//NOTE:
const score = { visitors: 1, home: 0 };
//this below thing is allowed in constant
score.home = 10; //const and still change
console.log(score);

//this is now allowed since u changing whole score and here whole score is constant.
// score = { visitors: 10, home: 100 };shows assignment to constant variable...

//lets create an object using let keyword and reassign the whole object and bruuh its possible.
let letObject = {
  a: 0,
  b: 1,
};
console.log(letObject);
letObject = { a: 10, b: 100 };
console.log(letObject);

//
let journalOfJac = [];
function addEntry(events, squirrel) {
  journalOfJac.push({ events, squirrel });
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);

addEntry(
  [
    "work",
    "ice cream",
    "cauliflower",
    "lasagna",
    "touched tree",
    "brushed teeth",
  ],
  false
);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

//lets see the same with an easy example
//lets see how push works in a function

const arr = [];
function addArray(a, b) {
  return arr.push({ a, b });
}

addArray(10, 20);
console.log(arr);

//Computing correlation

function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}

console.log(phi([76, 9, 4, 1])); //0.068

//
function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i];
    let index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] = +1;
  }
  return table;
}

console.log(tableFor("pizza", journalOfJac));

//lets see some basics and then we will come back to this men into rodent game.
//indexOf

console.log([1, 2, 3, 2, 1].indexOf(2)); //gives index of the first counter 2 at index 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); //gives index of the last  encounter 2 at index 3.
console.log([1, 2, 3, 2, 1, 2].lastIndexOf(2)); //gives index of the last  encounter 2 at index 5.

//slice method
//syntac
// slice(first argument--inclusive,second argument-exclusive)
//it returns a new and now effect to the older one

console.log([0, 1, 2, 3, 4].slice(2, 4)); //include elements of index 2,3 and not 4 buddy
console.log([0, 1, 2, 3, 4].slice(2)); //include elements of index 2 and rest also... since no last argument

//concat method

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));

//now lets go for string basically
let kim = "kim";

//in string concat,slice,indexOf and other built in properties works fine

//indexOf
console.log("coconut".indexOf("u")); //5

console.log("one two three".indexOf("ee")); //gives 11 because of first occurence of 'ee' at index 11

//trim method ,removes white space
console.log(" okay \n".trim()); //shows only okay

//padStart method
console.log(String(6).padStart(3, "0")); //it makes string 6 into 006

//split a string and join method

//split() basically split the string and return into an array
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);

//join method
console.log(words.join(" "));
//gives same sentence

//repeat method
console.log("LA".repeat(3));

//length property
console.log("abc".length); //3
console.log("abc"[1]); //'b

//REST Parameter

const arrayTwo = [1, 2, 3, 4];

console.log(...arrayTwo); //convert array into arguments

//rest parameter takes infinite arguments

function max(...numbers) {
  let result = -Infinity; //it takes minus argumnts as well
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));

let numbers = [1, 10, 12];
console.log(max(...numbers));

//this is also possible
console.log(max(2, 50, ...numbers));

//this is also
const alpha = ["power", "made"];
console.log("words", ...alpha, "easy");

//THE MATH object

function randomPointCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle),
  };
}
console.log(randomPointCircle(2));

//JSON
// {
//   "squirrel"  : false,
//   "events" : ["work","touched tree","pizza","running"]

// }

let string = JSON.stringify({
  squirrel: false,
  events: ["weekend"],
});

console.log(string);

console.log(JSON.parse(string).events);

//json cant accept function,date and undefined as a value
