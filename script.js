'use strict';
// //how to select a query selector element
// alert(document.querySelector('h1')); //<h1> Guess the number !!</h1>
// //how to select query selector element text
// alert(document.querySelector('h1').textContent); //Guess the number !!

// // changing the value of the element h1
// document.querySelector('h1').textContent = ' dont guess it';
// alert(document.querySelector('h1').textContent);

// alert(document.querySelector('.guess').value);

// document.querySelector('.guess').value = 1;

// let num = document.querySelector('.guess').value;

// console.log(typeof num);

//Event handlers and listeners

// let highScore = document.querySelector('.highscore').textContent; // getting high score value and storing it into highscore variable
// //adding a click event listener and event handler is fetching the value of input textbox and high scorew value is modified to input text
// document.querySelector('.check').addEventListener('click', function () {
//   alert(document.querySelector('.guess').value);
//   highScore = document.querySelector('.guess').value;
//   document.querySelector('.highscore').textContent = highScore;
// });

//Guess the number

//setting up the randon number between 1 to 20
let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;
let highScore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.highscore').textContent = '0';
console.log(secretNumber);
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number ⛔');
  }
  //checking if secret number is same as our guess number
  else if (secretNumber === guess) {
    displayMessage('Correct Number 🎉🥳');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.background =
      'linear-gradient(193deg, rgba(60,115,36,1) 0%, rgba(136,204,115,1) 50%, rgba(34,246,48,1) 100%)';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //checking if guesss number is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Number is too high📈' : 'Number is too low📉';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game😭');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.background =
        'linear-gradient(0deg, rgba(230,7,38,1) 0%, rgba(189,120,126,1) 50%, rgba(139,13,15,1) 100%)';

      document.querySelector('.number').textContent = secretNumber;
    }
  }
  //   //checking if guess is greater than secret number
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Number is to high📈';
  //       score = score - 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game😭';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.background =
  //         'linear-gradient(0deg, rgba(230,7,38,1) 0%, rgba(189,120,126,1) 50%, rgba(139,13,15,1) 100%)';
  //     }
  //   }
  //   //checking if guess is less than secret number
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Number is to low📉';
  //       score = score - 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game😭';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.background =
  //         'linear-gradient(0deg, rgba(230,7,38,1) 0%, rgba(189,120,126,1) 50%, rgba(139,13,15,1) 100%)';
  //     }
  //   }

  document.querySelector('.guess').value = '';
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.background =
    'linear-gradient(174deg,rgba(2, 0, 36, 1) 0%,rgba(24, 68, 196, 1) 35%,rgba(87, 115, 142, 1) 100%)';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing...';
  secretNumber = Math.ceil(Math.random() * 20);
  score = 20;
  document.querySelector('.score').textContent = score;
  console.log(secretNumber);
});
