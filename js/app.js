let magicNumber = Math.floor(Math.random() * 10) + 1;
let userChoice = prompt("Guess a number between 1 and 10. Entering '-1' quits the game." + magicNumber);
let count = 0;
let triesLeft = 3;
console.log("I am including the 'Magic Number' on purpose.");

function playTheGame(){
    do {
        if (userChoice == 0) {
            userChoice = prompt("You were supposed to guess a number between 1 and 10!");
        }
        else if (userChoice == -1) {
            alert("You have quit the game!");
            break;
        }
        else if (userChoice != magicNumber && userChoice > 0 && userChoice <= 10 && count == 2) {
            alert("Game over! You have run out of tries.");
            break;
        }
        else if (userChoice > magicNumber && userChoice <= 10) {
            triesLeft--;
            userChoice = prompt("You were wrong! The magic number (" + magicNumber + ") is less than your choice. " + triesLeft + " tries left!");
            count++;
        }
        else if (userChoice < magicNumber) {
            triesLeft--;
            userChoice = prompt("You were wrong! The magic number (" + magicNumber + ") is greater than your choice. " + triesLeft + " tries left!");
            count++;
        }
        else {
            userChoice = prompt("Oops! Invalid entry! Try again!");
        }
    }
    while (userChoice != magicNumber && userChoice != -1 && count <= 4);
    if (userChoice == magicNumber) {
        alert("You won!");
    }
}
document.querySelector('#prompt').addEventListener('click', function(){
    count = 0;
    magicNumber = Math.floor(Math.random() * 10) + 1;
    triesLeft = 3;
    userChoice = prompt("Guess a number between 1 and 10. Entering '-1' quits the game." + magicNumber);
    playTheGame();
})
playTheGame(); 

