isNaN(10); //false
isNaN("10"); //true
//but
Number.isNaN("10"); //also gives false sense since '10' string will become number=10

console.log(Number.isNaN(10));
//false
console.log(Number.isNaN("10"));
//false because Number function make it string 10 into number and then it is basically gives false
//but
console.log(Number.isNaN("hi")); //gives false since 'hi' is not NaN

//if-else===conditional execution
let theNumber = Number(prompt("Pick a Number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
}

//chain in js
let theNumberr = Number(prompt("Pick a Number"));
if (!Number.isNaN(theNumberr)) {
  console.log("Your number is the square root of " + theNumberr * theNumberr);
} else {
  console.log("Hey,why didnot you give me a number");
}

//choosing different paths
let num = Number(prompt("Pick a number"));
if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

//DISPATCHING IN JS USING SWITCH KEYWORD AND ITS WEIRD SYNTAX
//alternative of if-else is switch but in certain cases
//lets do a code
/*
let x;
if (x == "value1") fun1();
else if (x == "value2") fun2();
else if (x == "value3") fun3();
else defaultAction();
*/
let a;
switch ((a = 10)) {
  case (a = 5):
    console.log(a);
    break;
  case (a = 14):
    console.log(a);
    break;
  case (a = 10):
    console.log(a);
    break;
  default:
    console.log("provide correct value");
    break;
}

//similar code with switch keyword

//type of loops-to avoid repeatation.
//1.for 2.do while 3.while loop

//While and do loops
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//2.do while

let j;
do {
  console.log(j);
  j++;
} while (j < 10);

//while loop
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

//programe to find 2'10
let count = 0;
let numbr = 1;
while (count < 10) {
  numbr = numbr * 2;
  count++;
}
console.log(numbr);

//for loops is more easier than do while
//last code is simplified by for loop

for (let numb = 0; numb <= 12; numb = numb + 2) {
  console.log(numb);
}

//for loop for 2'10 programme
let result = 1;
for (let counter = 0; counter < 10; counter++) {
  result = result * 2;
}
console.log(result);

//CHAPTER2--EXERCISE

//Q2----FIZZBUZZ
for (let k = 1; k <= 100; k++) {
  if (k % 3 === 0 && k % 5 === 0) {
    console.log("FizzBuzz");
    console.log(k);
  } else if (k % 3 === 0) {
    console.log("Fizz");
    console.log(k);
  } else if (k % 5 === 0) {
    console.log("Buzz");
    console.log(k);
  }
}
