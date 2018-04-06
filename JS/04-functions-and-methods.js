// Problem #1
function sayHello(person) {
  var secondPerson = "Hello, " + person + "!";
  console.log(secondPerson);
  alert(secondPerson);
}

var person = prompt ("What's your name?");
// sayHello(person);

(function() {
  var secondPerson = "Hello, " + person + "!";
  console.log(secondPerson);
  alert(secondPerson);
}());

// Problem #2
function addition(i, j) {
    var additionResults = i + j;
    var string = "The sum of " + i + " and " + j + " is " + additionResults;
    return string;
}

function subtraction(i, j) {
  var subtractionResults = i - j;
  var string = "The result of " + i + " minus " + j + " is " + subtractionResults;
  return string;
}

var firstValue = prompt ("Enter a value.");
var secondValue = prompt ("Thanks, now enter another value.");
var answer = parseInt(firstValue);
var answerTwo = parseInt(secondValue);
console.log(addition(answer, answerTwo));
console.log(subtraction(answer, answerTwo));



// Problem #3

function capitalize (lowerCase) {
  var firstLetter = lowerCase.slice(0, 1);
  var otherLetters = lowerCase.slice(1);
  firstLetter = firstLetter.toUpperCase();
  var string = firstLetter + otherLetters;
  return string;
}

var userString = prompt ("Tell me something new!");
var userAnswer = capitalize(userString);
console.log(userAnswer);

// Problem #4
function distribution (partyGuests, partyPizzas) {
  var slicesPerPie = 6;
  var totalSlices = partyPizzas * slicesPerPie;
  var piecesPerGuest = totalSlices / partyGuests;
  var leftOvers = totalSlices % partyGuests;
  var X, Y, Z, N;
  var string = partyGuests + " people with " + partyPizzas + " pies. " + "Each person gets " + totalSlices + " pieces of pie. There are " + leftOvers + " leftover slices of pie. ";
  return string;
}
var partyGuests = prompt ("How many people?");
var partyPizzas = prompt ("How many pies?");

console.log(distribution(partyGuests, partyPizzas));

//Problem #5
function MadLib(noun, verb, adjective, adverb, nounNumber) {
  this.noun = noun;
  this.verb = verb;
  this.adjective = adjective;
  this.adverb = adverb;
  this.number = nounNumber;
  this.funnySentence = function (option) {
    var string;
    if(option === 1) {
      string = " The "  + this.noun + " " + this.verb + " " + this.adverb + " to the " + this.adjective + " roller skating rink. ";
    }
    if (option === 2) {
        string = this.number + " " + this.noun + " " + this.verb + " " + this.adverb + " over the " + this.adjective + " dumpster. ";
    }
    if (option === 3) {
        string = " There are " + this.number + " " + this.noun + " " + this.verb + " " + this.adverb + " in a " + this.adjective + " clown car. ";
    }
    if (option === 4) {
        string = " A " + this.noun + " " + this.verb + " " + this.adverb + " at the " + this.adjective + " shopping center. ";
    }
    return string;
  }
}
var game = new MadLib("Candice", "loves", "shiny", "a lot", "7");
