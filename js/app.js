$(document).ready(function(){
	
	/*--- I declare variables ---*/
	var computerNumber, userGuess, guessed, guesses; 

    function newNumber () {
        return Math.floor((Math.random()*100)+1);
    }
    
    /*-- How I make a new game ---*/
	function newGame() {
		guesses = 0;
		guessed = false;
		$("ul#guessList li").remove();
		$('#feedback').text("Take a guess!");
		$('#count').text(guesses);
		computerNumber = newNumber();
		$('#userGuess').val("");
	}

	/*--- How I check the users guess---*/
	function controlGuess(userGuess) {
		if (isNaN(userGuess) || userGuess % 1 !== 0) {
			$('#feedback').text("Hey. That's not a whole number!");
		} else if (userGuess < 1 || userGuess > 100) {
			$('#feedback').text("Make a guess between 1 and 100!");
		} else if (computerNumber > userGuess) {
			$('#feedback').text("Too low!");
            guesses++;
            $('#count').text(guesses);
            $("ul#guessList").append("<li>" + userGuess + "</li>");
            $('#userGuess').val("");
		} else if (computerNumber < userGuess) {
			$('#feedback').text("Too high!");
            guesses++;
            $('#count').text(guesses);
            $("ul#guessList").append("<li>" + userGuess + "</li>");
            $('#userGuess').val("");
		} else {
            $('#feedback').text("Congrats!");
            guessed = true;
        }
    }


	/*--- I create a new game ---*/
	newGame();

	/*---I listen for submit ---*/
	$("form").submit(function(event){
		event.preventDefault();
    	if (!guessed) {
			userGuess = +$('#userGuess').val();
            controlGuess(userGuess);
        } else {
			$('#feedback').text("You already won this game!");
		};
  	});

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- I create a new game on click event---*/
  	$(".new").click(function(event){
  		event.preventDefault();
  		newGame();
  	});




});