//looping a triangle

let hash = "";
for (let i = 0; i < 10; i++) {
  hash += "#";
  console.log(hash);
}

//fizzbuzz

for (let i = 0; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  } else if (i % 3 === 0) {
    console.log(i);
  } else if (i % 5 === 0) {
    console.log(i);
  }
}

//chessboard
let alpha = "";
for (let i = 1; i < 11; i++) {
  for (let j = 0; j < 4; j++) {
    if (i % 2 === 0) {
      alpha += "a" + " ";
    } else alpha += " " + "a";
  }
  alpha += " " + "\n";
}

console.log(alpha);

//matrix

let num = 25780;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    num += Math.trunc(Math.random() * 10);
  }
  num += "\n";
}

console.log(num);


