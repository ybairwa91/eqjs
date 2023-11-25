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
