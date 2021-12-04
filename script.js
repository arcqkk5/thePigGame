'use strict';

//var
let randomDice = 0;
let currentScore = 0;

let activPlayer = 0;
const totalScore = [0, 0];

// player
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//DOM
const score0Element = document.getElementById('score--0'); // Кол-во очков первого игрока
const score1Element = document.getElementById('score--1'); // Кол-во очков второго игрока

const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

score0Element.textContent = 0;
score1Element.textContent = 0;
//Кнопка новой игры
const btnGame = document.querySelector('.btn--new');
// Бросить кубик
const btnRoll = document.querySelector('.btn--roll');
//Кнопка оставить очки
const btnHold = document.querySelector('.btn--hold');

const diceElement = document.querySelector('.dice');
diceElement.classList.add('hidden');

//roll the dice
btnRoll.addEventListener('click', function () {
  randomDice = Math.trunc(Math.random() * 6) + 1;
  diceElement.classList.remove('hidden');
  diceElement.src = `image/dice${randomDice}.png`;

  if (randomDice !== 1) {
    currentScore += randomDice;
    document.getElementById(`current--${activPlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activPlayer}`).textContent =
      currentScore;
    activPlayer = Math.abs(activPlayer - 1);
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
});
