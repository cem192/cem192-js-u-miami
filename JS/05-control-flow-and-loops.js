// Control Flow

//Problem #1
var txt;
var user = confirm("Click Okay or cancel.");
if (user == true) {
  txt = "Congratulations, you selected Okay!";
}  else {
  txt = "So sorry, you selected Cancel";
}
window.alert(txt);


//Problem #2
var txt;
var user = prompt("Which do you like more? Cats or dogs?");
if (user==cats) {
  txt = "Meow!";
} else if (user==dogs){
  txt = "Woof!";
} else {
  txt = "Animal Hater!";
}
window.alert(txt);

// Problem #3
var txt;
var user = prompt("What's your favorite Candy?");
switch (user) {
  case "Red Vines":
  console.log("Red Vines are for movie dates!");
  break;

  case "Candy Corn":
  console.log("Yellow is the sweetest color!");
  break;

  case "Jelly Beans":
  console.log("Easter is Jelly Bean time of the year!");
  break;

  case "Candy Bars":
  console.log("Right Twixt, Left Twixt!");
  break;

  case "Pepper Mints";
  console.log ("You must be old!");
  break;

  case "Default";
  console.log ("I guess that's a good candy too");
}

// Loops
// Problem #1
for (i = 1; i < 11; i++)

// Problem #2
var i = 10;
while (i > 1){
  i--;
}

//Problem #3
var i = 10;
do { i--;
} while (i > 1);

// Problem #4
var array = ["Flynn", "Quorra", "Coby", "Charlie"];
for (i = 0; i < array.length; i++) {
  console.log("Hello, " + array[i]);
}

// Problem #5
var car = {
  year: 2016,
  make: "Chevrolet",
  model: "Camaro"
}

for (var property in car) {
  console.log(car[property] + " ");
}
