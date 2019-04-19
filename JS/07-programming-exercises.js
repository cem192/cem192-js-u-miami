// Lotto Picker
// Script Written Out in Plain English
//1). Create a function
//2). Set variables for the function creating an array to hold the n6 balls
//3). Use infiinity loop to set the terms for the variable indicating how many numbers to pull and to count up
//4.) Randomize those numbers capping it at 69 for the white ball
//5.) Break the loop to stop once the array holds 5 balls
//6.) Powerball: create a variable, set the range
//7.) Push to insert Powerball into the end array
//8.) Return the array

function lottoPick(){
	var ball = new Array();

	// for white ball
	while(true){
		var nm = Math.floor(Math.random()*69)+1;

		if (ball.indexOf(nm) == -1){
			ball.push(nm);
		}

		if (ball.length == 5) break;

	}

	// for the red ball
	var nm = Math.floor(Math.random()*26)+1;
	ball.push(nm);

	return ball
}
