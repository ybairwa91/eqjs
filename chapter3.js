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

console.log(powers(2)); //by default since exponent is undefined it will take 2 as default value
console.log(powers(2, 3)); //no need to take default value.
