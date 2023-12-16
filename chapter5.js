//++++++++++HIGHER ORDER FUNCTION++++++++++

`use strict`;

import SCRIPTS from "./script";

//topic==complexity

//lets take two programmes to find sum of given range
//first
let total = 0;
let count = 1;

while (count <= 10) {
  total = total + count;
  count++;
}
console.log(total);

//second
// console.log(sum(range(1, 10))); we solved it in last chapter

//now second programme is easy to read and less vagueness so attracts less bugs

//++++++ABSTRACTION++++++++++
//IT HIDE DETAILS BASICALLY
//SO WE CAN THINK AND WORK ON HIGHER LEVEL RATHAR THAN THINKING OF EVRY MINUTE DETAILS

//examples of abstraction
for (let i = 0; i < 10; i++) {
  console.log(i);
}
//but
function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
//now
repeatLog(10);

//lets do something more
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, console.log);

//
let labels = [];
repeat(5, (i) => {
  labels.push(`units ${i + 1}`);
});
console.log(labels);

//HIGHER ORDER FUNCTION===>allow us to do abstraction in a better way
//function are just regular values bro
//function are basically values wrapped in a code to excute anytime we want to
//when a function takes other function as an argument or output it mainly defined as an higher order function

function greaterThan(n) {
  return (m) => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
console.log(greaterThan10(10));
console.log(greaterThan10(9));

//
function noisy(f) {
  return (...args) => {
    console.log("calling with", f, args);
    let result = f(...args);
    console.log("calling with", args, ",returned", result);
    return result;
  };
}

noisy(Math.min)(3, 2, 1);

//
function unless(test, then) {
  if (!test) then();
}

repeat(3, (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});

//built in method====forEach

["A", "B"].forEach((p) => console.log(p)); //gives A AND B

//Script Data set

//Filtering Arrays
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

console.log(filter(SCRIPTS, (script) => script.living));
