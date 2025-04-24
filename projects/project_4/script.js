let randomNum = parseInt(Math.random()*100 +1)
// console.log(randomNum);
const sumbit=document.querySelector('#subt')                                
const userInput=document.querySelector('#guessField')                                
const guesses=document.querySelector('.guesses')                                
const remaining=document.querySelector('.lastResult')                                
const lowOrHi=document.querySelector('.lowOrHi')
const resultParas=document.querySelector('.resultParas')
const p =document.createElement('p')
let prvguesses =[];
let guessCount = 1;

let playGame = true

if(playGame){
    sumbit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateguess(guess)
})}


function validateguess(guess){
    if(isNaN(guess)){
        alert('Please enter a Valid number')
    }
    if(guess < 1 || guess > 100){
        alert('Please enter a Valid number')
    }
    if(isNaN(guess)){
        alert('Please enter a Valid number')
    }else{
        prvguesses.push(guess)
        if(guessCount === 11){
            displayguess(guess)
            displaymessage(`Game Over random number was ${randomNum}`)
            endgame()
        }else{
            displayguess(guess)
            checkguess(guess)
          
        }
    }
    }

function checkguess(guess){
    if(guess === randomNum){
        displaymessage(`Congratulations! ${randomNum} is correct`)
        endgame()
    }else if(guess < randomNum){
        displaymessage(`Your guess is too low`)
       
    }else if(guess > randomNum){
        displaymessage(`Your guess is too high`)
      
    }
  
}
function displayguess(guess){
    userInput.value = ''
    guesses.innerHTML += `${guess}, `
    guessCount++;
    remaining.innerHTML = `${11 - guessCount} guesses left`
}
function displaymessage(message){
        lowOrHi.innerHTML = `<h2>${message}</h2>`;
      
}

function endgame(){
    userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function startgame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prvguesses = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
    })
}