let player ={
  name : "king",
  chips: 300
}
let cards = []
let sum = 0;
let hasBlackJack= false;
let isAlive = false;
let message ="";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name +  ": $" + player.chips


function getRandomCard(){
  //return Math.floor( Math.random()*13 ) + 1 ;
  let randomNumer = Math.floor( Math.random()*13 ) + 1
  if (randomNumer > 10) {
      return 10
  } else if (randomNumer === 1) {
      return 11
  } else {
      return randomNumer
  }
}


function startGame(){
  isAlive = true

  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame (){
  cardsEl.textContent = "Cards: "
  for (i =0; i < cards.length; i ++){
    cardsEl.textContent += cards[i] + " "
  }
  sumEl.textContent = "sum:" + sum;
console.log(sum)
if (sum <= 20) {
  message = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
  message = "Wohoo! You've got Blackjack! 🥳"
  hasBlackJack = true;
} else  {
  message = "You're out of the game! 😭";
  isAlive = false;
}
messageEl.textContent = message;
}

function newCard(){
  if ( isAlive === true && hasBlackJack === false){
  let newEl= getRandomCard();
  sum += newEl;
  cards.push(newEl);
  renderGame();
  }
  }