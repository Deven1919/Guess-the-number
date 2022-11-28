'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

//console.log(secretNumber);
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When no number in input box
  if (!guess) {
    displayMessage('⛔ No Number!.');
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct Number!.');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 To High!.' : '📉 To Low!.');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose😭.');
      document.querySelector('.score').textContent = 0;
    }
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '📉 To Low!.';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = 'You lose😭.';
    //       document.querySelector('.score').textContent = 0;
    //     }
  }
});

const restGame = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    // document.querySelector('body').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    displayMessage('Start Guessing! ..');
  });
