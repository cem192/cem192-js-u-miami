// Problem #1
var cats = 2;
cats;
2
cats = 3;
3
cats
3
cats = "Flynn and Quorra";
cats
"Flynn and Quorra"
cats = true
cats
true
var dogs = cats
dogs
true
cats
true
// There can be multiple variables with the same values. Almost like putting them together in variable groups.

// Problem #2
typeof 3
"number"
typeof "Hello!"
"string"
typeof true
"boolean"
typeof 102
"number"
typeof false
"boolean"
type of (2017 + "Miami Hurricanes")
"string"

//Problem #3
4 + 2
6
4 - 2
2
4 * 2
8
4 % 2
0

//Problem #4
0 - (-15)
15
8 - (-3) * (-2 - 6)
-16
(35 * 15 + 8) - 20 - 48
465

//Problem #5
var i = 1;
while (i < 10) {
  console.log(i);
  i++;
}
1
2
3
4
5
6
7
8
9

var i = 1;
while (i < 10) {
console.log(i);
i+=
}
// Ask Matt "Uncaught syntax error: unexpected token}, but i followed all instructions"

//Problem #6
var i = 10:
while (i > 0) {
  console.log(i);
  i--
}
10
9
8
7
6
5
4
3
2
1

var i = 10;
while (i > 0) {
console.log(i);
i-=
}
// Ask Matt, same problem as above

// Problem #7
var i = 4;
i = i * 2;
8

var j = 4
j * = 2;
8

// I prefer the first option because it spells out the thinking behind each step.

// Probem #8

true && false
false

true || false
true

true && true
true

false || true
true

!false
true

// Part #9
(1 < 2) && (3 == 3)
true

("Hello" !== "World") || false
true

!(2 > 4)
true

// Problem #10
var greeting = "What is your name?";
var result = window.prompt(greeting);
console.log("Hello, " + result + "!");

// Problem #11
var greeting = "Enter a phrase.";
var result = window.prompt(greeting);
var string = result;
var answer = string.length;
alert(answer);
