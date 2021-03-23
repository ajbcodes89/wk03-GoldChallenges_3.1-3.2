// What is needed for a guesing game?

// 1.  A range for our user to guess between. This should be 1-10.
// 2.  A randomized computer answer.
// 3.  A user guess that will provide a prompt
// 4.  A guess count (for loop variable declaration)
// 5.  gameLost = false


// Logic
// 1.  A way to validate the user guess
// 2.  Check if the user guess === the computer answer and alert that he / she won
// 3.  If the user guess is greater than the computer answer - nudge him or her to guess lower
// 4.  If the user guess is lower than the computer answer - nudge him or her to guess higher
// 5.  Handle the case when a user loses

// *** You will need to explore documentation on parseInt(), prompt, alert, Math.floor(), and Math.random()

//? not required:  If you liked to style it, feel free to add a stylesheet to your HTML.

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

computerAnswer = Math.floor(Math.random() * 10) + 1;

function submitFunc() {
    let submission = document.querySelector("input").value;
    userAnswer = parseInt(submission);
    if (userAnswer > computerAnswer) {
        alert('Guess lower!')
        console.log(computerAnswer)
        console.log(userAnswer)
    } else if (userAnswer < computerAnswer) {
        alert('Guess higher!'); 
        console.log(computerAnswer)
        console.log(userAnswer)
    } else if (userAnswer === computerAnswer) {
        alert('You won!')
        console.log(computerAnswer)
        console.log(userAnswer)
    } else {
        alert('error')
        console.log(computerAnswer)
        console.log(userAnswer)
    }
}
submitFunc();


// let p = document.querySelector('p')
// function youWon(e) {
    //     let answer = `You won!`
    //     console.log(answer)
    //     p.textContent = answer
    // }
    
    // function guessHigher(e) {
    //     let tooLow = `Guess Higher`
    //     console.log(tooLow)
    //     p.textContent = tooLow
    // }
    
    // function guessLower(e) {
    //     let tooHigh = `Guess Lower`
    //     console.log(tooHigh)
    //     p.textContent = tooHigh
    // }
// }