//== equal to
//=== equal value and equal type 
//!= not equal 
//!== not equal value or not equal type
//> great than
//< less than
//>= greater than or equal to 
//<= less than or equal to 

//



//You call jQuery's $ function, passing to it the document object. ... Inside the function
//passed to the ready() method, you can execute all the jQuery and JavaScript code you need,
//in order to initialize / enhance the HTML elements in your page.
$(document).ready(function() {

	//NUMBER ARRAYS

	//AKA - Math.random is between 0 inclusive and 1 exclusive
	//var CHOOSE A NAME = Math.floor(Math.random() * CHOOSE A #);
	//console.log(CHOOSE A NAME);
	//random computer variable array
	var rand = [];

	for (var r = 19; r < 121; r++) {   //for loop: loops through a block of code a number of times
		//statement 1: var r = 19 (sets a variable before the loop starts)
		//statement 2: r < 121 (defines the condition for the loop to run). must be less than 121
		//statement 3: r++ (increases a value (r++) each time the code block in the loop has been executed)
		rand.push(r);  //The push() method adds new items to the end of an array, 
	}                  //and returns the new length.


	//crystal numbers array - same concept as above 
	var crystals = [];

	for (var c = 1; c < 13; c++) {

		crystals.push(c);
	}



	//GLOBAL VARIABLES: is declared outside the function or declared with window object. 
	//It can be accessed from any function.
	//random variables selected by computer randomly
	var randNumber; // number to match
	var crystalNumbers = []; // for array of random crystal values

	var c1;
	var c2;
	var c3;
	var c4;

  var totalScore = 0; //the users score

	var wins = 0;
	var losses = 0;

	//FUNCTIONS USED

	//pick a random number
	function pickRandomNumber(arr) {  
		//Math.floor() function returns the largest integer less than or equal to a given number.
		//The length property returns the length of a string (number of characters). The length of an empty string is 0.
		//randomeNumber = Math.random 
		//arr = arrays 
		var x = arr[Math.floor(Math.random() * arr.length)];
		randNumber = x; 
		$("#randomNumber").html(randNumber);  

		console.log("random number: " + randNumber);

	} 

	//pick random numbers for crystals

	function pickRandomCrystals(arr) {

		for (var y = 0; y < 4; y++){  //4 (for each crystal)

			var a = arr[Math.floor(Math.random() * arr.length)];  

			crystalNumbers.push(a); //push the variable (a)
		}
		console.log("crystal numbers: " + crystalNumbers);
	} 

	function crystalValues(arr) {

		//change value of each crystal button according to array
		for (i = 0; i < arr.length; i++) {

		$("#button-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		c1 = arr[0];
		c2 = arr[1];
		c3 = arr[2];
		c4 = arr[3];
	} 

	function gameReset(x) {

		crystalNumbers = []; //clears crystal number values

		pickRandomNumber(rand);

		pickRandomCrystals(crystals);

		crystalValues(crystalNumbers);

		totalScore = 0;
		$("#totalNumber").html(totalScore);

		alert(x);
	} 

	// GAME SETTINGS AT START

	pickRandomNumber(rand); //random number to match
	pickRandomCrystals(crystals); // array of random crystal values
	crystalValues(crystalNumbers);

		//crystal button functions

		$("#button-1").on("click", function() {

			totalScore += c1;
			$("#totalNumber").html(totalScore);
		});

		$("#button-2").on("click", function() {

			totalScore += c2;
			$("#totalNumber").html(totalScore);
		});

		$("#button-3").on("click", function() {

			totalScore += c3;
			$("#totalNumber").html(totalScore);
		});

		$("#button-4").on("click", function() {

			totalScore += c4;
			$("#totalNumber").html(totalScore);
		});

	$("button").on("click", function() {
		//this is what happens if the user wins
		if (totalScore == randNumber) {

			wins++;
			console.log(totalScore);
			$("#totalNumber").html(totalScore);
			$("#wins").html("Wins: " + wins);


			setTimeout(function() {gameReset("YOU WIN!!")}, 200);
		}

		else if (totalScore > randNumber){

			losses++;
			$("#totalNumber").html(totalScore);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {gameReset("WOMP-WOMP...YOU LOSE!")}, 200);
		}
	});

}); 
//end of the javascript