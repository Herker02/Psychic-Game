        // variables
            var computerGuess=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            var letters= "";
            var wins= 0;
            var losses= 0;
            var guessLeft=  9;
            var letterUsed= [ ];

        // functions
        // computer guesses
        var computerChoice = computerGuess[Math.floor(Math.random() * computerGuess.length)];
        
        // guesses left
        function countGuessAnswer() {
        document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessLeft;
        }

        // guesses so far
        function guessSoFar () {
            document.querySelector('#letters').innerHTML = "Your guesses so far: " + letterUsed.join(' ');
        }

        countGuessAnswer();

        // restart game
        var restart = function() {
            guessLeft = 9;
            letterUsed = [];
            var computerChoice = computerGuess[Math.floor(Math.random() * computerGuess.length)];
        }

        // game starts
        document.onkeyup = function(event) {
            // guessLeft--;
            var userGuess = computerGuess.keys(event.keycode).toLowerCase();
        

            letterUsed.push(userGuess);
            countGuessAnswer();
            guessSoFar();

            for (userGuess) {

                if (userGuess === computerGuess);{
                wins++;
                document.querySelector('#wins').innerHTML = ("Wins: ") + wins;
                restart();
            }    
            else if (guessLeft === 0) {
                losses++;
                document.querySelector('#losses').innerHTML = ("losses: ") + losses;
                restart();
        }}}   

            
            
                
