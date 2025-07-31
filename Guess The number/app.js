let randomNumber = parseInt(Math.random() *100 + 1);
console.log(randomNumber);


const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')

const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')

const lowOrHi = document.querySelector('.lowOrHi')

const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')
let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
        
    })
}
//this function is useful to check wether the give number is valid not any string 
function validateGuess(guess){
    if(isNaN(guess)){
       alert('Please Enter a valid number') 
    }
    else if(guess < 1){
        alert('Please Enter a number more than 1') 
    }
    else if(guess > 100){
        alert('Please Enter a number less than 100') 
    }
    else{
        prevGuess.push(guess)
        if(numGuess >=10){
            displayGuess(guess)
            displayMessage(`Game Over . Random Number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

//check function is used to tell wether ur given value is high or low whatever
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You Guessed It right')
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage('Number is TOO LOW')
    }
    else if(guess > randomNumber){
        displayMessage('Number is TOOO HIGH')
    }
} 

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} , `
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}

// for printing the message of check guess
function displayMessage(message){
    lowOrHi.innerHTML = `<h2> ${message} </h2>`;
}

function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener('click' , function(e){
        randomNumber = parseInt(Math.random() *100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}