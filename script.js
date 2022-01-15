'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const calcScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const button = document.querySelector('.check');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When there's no input
  if (!guess) {
    displayMessage('⛔️ No Number');

    //When Player wins!
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    button.disabled = true;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong!
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📈 Too Low!');
      score--;
      calcScore(score);
    } else {
      displayMessage('🤯 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
    //When Guess is too high!
  }
});

//document.querySelector('.again').addEventListener('click', function () {
//  location.reload();
//});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  calcScore(score);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  button.disabled = false;
});
