let cards = [];
let sum = 0;
let hasBlackJacket = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let cardEl = document.querySelector("#cards-el");
let player = {
  name: "Ore",
  chips: 145,
};

let myPlayer = document.querySelector("#player-el");
myPlayer.textContent = player.name + ": $" + player.chips;

let sumEl = document.querySelector("#sum-el");

console.log(sumEl);
console.log(myPlayer);

let race1 = 102;
let race2 = 104;

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  result();
}

function result() {
  for (let startCard = 0; startCard < cards.length; startCard++) {
    cardEl.innerHTML += cards[startCard] + " ";
  }
  if (sum < 21) {
    message = " Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJacket = true;
  } else if (sum > 21) {
    message = "You are out of the game!";
    isAlive = true;
  }
  messageEl.innerHTML = message;
  sumEl.innerHTML = "Sum: " + " " + sum;
}

function runNewCard() {
  if (isAlive === true && sum < 21) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    result();
  }
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

//console.log(hasBlackJacket);
//console.log(isAlive);
console.log(getRandomCard());
