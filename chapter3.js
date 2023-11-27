//++++++++++++++++++++++FUNCTION+++++++++++++++++

//function-a piece of program in a value

const square = function (x) {
  return x * x;
};
console.log(square(10)); //gives 100

//parameters can be any n number or no parameter

//how to find 2 to the power

const power = function (base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    // result = result * base;
    result *= base;
  }
  //   console.log(result);
  return result;
};
console.log(power(2, 10));
//gives 1024

//binding and scope==declared variable(binding) outside of a function has a global scope while decalred binding in a function has scope limited tot the function itself and not to the oustide or global world

let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x); //10 we can access x here from global scope easily
  console.log(x + y + z);
  //60
}
// console.log(y); //error since y is local binding in if envirorment
console.log(x + z); //z is var which can be access anywhere

//each scope look  into the scope around it,means in previous one here in if environment x lookout for global scope to fetch the value since not available locally

const halve = function (n) {
  return n / 2;
};

let n = 10;
console.log(halve(100));
//gives 50
console.log(n);
//gives 10

//NESTED SCOPE and LEXICAN SCOPING
const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit = unit + "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "can", "chickpeas");
};

hummus(2);

//Function as a value=function value can be reassigned bro

/*
let launchMissiles = function () {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function () {
    // do nothing 
  };
}
*/
//see function binding name value has been reassigned in this programme
let value = function (x, y) {
  return Math.max(x, y);
};
console.log(value(2, 3));
if (true) {
  value = function (x, y) {
    return Math.min(x, y);
  };
}
console.log(value(2, 3));

//what is function declaration==a easier way to create a function
function squaree(x) {
  return x * x;
}
//function declaration is not following top to bottom approach means u can define later and call earlier
console.log("The future says", future());

function future() {
  return "You'll never have flying cars";
}

//ARROW FUNCTION--THIRD WAY TO DECALRE A FUNCTION
//Arrow after parameters
//body in curly braces after arrow\
// can avoid bracket if only one parantheses.
//can avoid curly braces if only one statement or expression

//
const squareee = (x) => {
  return x * x;
};
//
const squareeee = (x) => x * x;

//
let result = 1;
const powerr = (base, exponent) => {
  for (let i = 0; i < exponent; i++) {
    // result = result * base;
    result *= base;
  }
  console.log(result);
};
powerr(2, 10);

//when no parameters

const horn = () => {
  console.log("Toot");
};

//THE CALL STACK
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

//Optional arguments

//1.if arguments are extra then it will be simple ignored by js engine
function findSquare(x) {
  return x * x;
}
console.log(findSquare(4, true, "hedgehog"));

//if more parameters and argument is not defined then it will simply render undefined
function findSquares(x, y) {
  console.log(x * x, y);
}
findSquares(2); //it will show 4 undefined(since no y argument)

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
console.log(minus(2)); //-2
console.log(minus(2, 1)); //1

//default parameter-you can assign default values of parameters in case of user didnot assigned the argument

function powers(base, exponent = 2) {
  let rslt = 1;
  for (let i = 0; i < exponent; i++) {
    rslt = rslt * base;
  }
  return rslt;
}

console.log(powers(2)); //since exponent is undefined it will take 2 as default value
console.log(powers(2, 3)); //no need to take default value.

//THE CALL STACK
//call stack: when we call function from another function that time this calling process goes into the call stack//

//CALL STACK track the execution or flow of function meant to say which function is now executing now and tell the order as well

//example1
function greet(who) {
  console.log("hello " + who);
}
greet("harry");

//how code execute ,it will ignore function defined since nothing to execute btw(179-181) now 182 code line start to execute and it will call function greet back to line 179
//now in call stack list:greet
//now function console the value and now who value requires to go back to line 182 to fetch harry argument and now again goes back to line 180 and function returns hello harry
//hence function execution is completed and call stack list now empty and greet is pop out
//call stack list:empty

//example2
function greeting() {
  sayHi();
}
function sayHi() {
  return "Hi!";
}

// Invoke the `greeting` function
greeting();

//how call stack works here

//greeting() executes---call function greetting()
//CALL STACK LIST:greeting

//greeting run call sayHi() function
//CALL STACK LIST:sayHi - greeting(in grid pattern)

//sayHi() execute and now again we goes back to function greeting
//CALL STACK LIST:greeting  (since sayHi now pop out )

//greeting also ends
//CALL STACK LIST:EMPTY(SINCE both execution ends and no function is running now).

//How stack become overflow
/*
function chicken() {
  return egg();
}

function egg() {
  return chicken();
}

console.log(chicken() + "Came first"); // this will cause a Stack Overflow error because it's an infinite loop of calling each other.

*/

/*
//TOPIC===CLOSURE===
..see when we create a function then its local bindings which are declared inside of function ,this facts gives us something intersting to note down

//first learn this thing that function can be stored in another binding means

*/
function outerfunction() {
  let x = "I am a variable inside outerfunction";
  function innerFunction() {
    console.log("x is " + x);
  }
  return innerFunction;
}
let myInnerFunc = outerfunction(); //it holds now innerFunction
console.log(myInnerFunc);

//how to call now innerFunction--since myInnerFunc binding is holding whole innerFunction definition lets do this
myInnerFunc();

//this is prime example of closure
//see x still accesse by innerFunction which is in lexicon scope of innerFunction

//hence whenever a function is defined it created it lexican environment evry time means whenevr u call a function it has its own environment which has property like lexican scoping so it will access all the varibles and bindings
//closure is when the function has access to its own scope, even after it gets executed outside of its scope.

//examples

function wrapValue(n) {
  let local = n;
  return () => local;
}

//
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

//means function ke ander ek function hai or hum agar sirf ander wale ko access karo to uske pass sari values ka access hoga jo uske enviroment me hai matlab ki lexican scoping ke through wali bhi.all outerfunction value and globalwali  to hai hi.

//another example to use closure for out useful purpose
function multiplier(factor) {
  function numbers(number) {
    return number * factor;
  }
  return numbers;
}

let twice = multiplier(2);
// console.log(twice);
console.log(twice(5)); //10 ayega
