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

//DELETE OPERATOR==a unary type operator delete the property
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
//BUT
//BELOW THING IS NOT ALLOWED
// score = { visitors: 10, home: 100 };shows assignment to constant variable...

//SOLN-lets create an object using let keyword and reassign the whole object and bruuh its possible.
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
