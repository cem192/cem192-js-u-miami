// objects.js

// Build the object with two films.

var pixarMovies = {

  toyStory: {
    title: "Toy Story",
    released: 1995,
    starring: ["Tom Hanks", "Tim Allen"],
    rottenTomatoesRating: 100,
    academyAward: "No",
    summary: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room."


  },

  aBugsLife: {
    title: "A Bugs Life",
    released: 1998,
    starring: ["Dave Foley", "Kevin Spacey", "Julia Louis-Dreyfus"],
    rottenTomatoesRating: 92,
    academyAward: "No",
    summary: "A misfit ant, looking for warriors to save his colony from greedy grasshoppers, recruits a group of bugs that turn out to be an inept circus troupe."


  }

}

// Add two films using bracket notation.
var monstersInc = {};
  monstersInc["title"] = "Monsters Inc.";
  monstersInc["released"] = 2001;
  monstersInc["starring"] = ["Billy Crystal", "John Goodman"];
  monstersInc["rottenTomatoesRating"] = 96;
  monstersInc["academyAward"] = "Yes";
  monstersInc["summary"] = "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think.";
pixarMovies["monstersInc"] = monstersInc;

var findingNemo = {};
  findingNemo["title"] = "Finding Nemo";
  findingNemo["released"] = 2003;
  findingNemo["starring"] = ["Albert Brooks", "Ellen Degeneres"];
  findingNemo["rottenTomatoesRating"] = 99;
  findingNemo["academyAward"] = "Yes";
  findingNemo["summary"] = "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.";
pixarMovies["findingNemo"] = findingNemo;



// Add two films using dot notation.
var theIncredibles = {};
  theIncredibles.title = "The Incredibles";
  theIncredibles.released = "2004";
  theIncredibles.starring = ["Craig T. Nelson", "Jason Lee", "Holly Hunter"];
  theIncredibles.rottenTomatoesRating = 97;
  theIncredibles.academyAward = "Yes";
  theIncredibles.summary = "A family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.";
pixarMovies["theIncredibles"] = theIncredibles;

var cars = {};
    cars.title = "Cars";
    cars.released = 2006;
    cars.starring = ["Owen Wilson", "Paul Newman", "Bonnie Hunt", "Larry the Cable Guy"];
    cars.rottenTomatoesRating = 74;
    cars.academyAward = "No";
    cars.summary = "A hot-shot race-car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family.";
pixarMovies["cars"] = cars;

//Questions & Answers:
pixarMovies.aBugsLife.academyAward;
"No"
pixarMovies.monstersInc.rottenTomatoesRating;
96
pixarMovies.cars.summary;
"A hot-shot race-car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family."
pixarMovies.theIncredibles.starring;
(3) ["Craig T. Nelson", "Jason Lee", "Holly Hunter"]
var supportingActors = pixarMovies.aBugsLife.starring.splice(1, 2);
console.log(supportingActors);
(2) ["Kevin Spacey", "Julia Louis-Dreyfus"]
pixarMovies.monstersInc.academyAward;
"Yes"
pixarMovies.findingNemo.academyAward;
"Yes"
pixarMovies.theIncredibles.academyAward;
"Yes"
pixarMovies.cars.starring;
(4) ["Owen Wilson", "Paul Newman", "Bonnie Hunt", "Larry the Cable Guy"]
pixarMovies.cars.starring.length;
4
pixarMovies.toyStory.rottenTomatoesRating;
100
pixarMovies.findingNemo.rottenTomatoesRating;
99
