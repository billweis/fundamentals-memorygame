


var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];

function show() {
  this.style.display = "block";
}

function checkForMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      document.getElementById("winner").show();
    }
    else {
      document.getElementById('loser').show();
    }
  }
}

function flipCard() {
  let cardId = this.getAttribute('data-id');
  let currentCard = cards[cardId];
  this.setAttribute('src', currentCard.cardImage);
  cardsInPlay.push(currentCard.rank);

  // console.log("User flipped a " + currentCard.rank);
  // console.log("Image: " + currentCard.cardImage);
  // console.log("Suit: " + currentCard.suit);
  checkForMatch();
}

function reset() {
  location.reload();
}

let button = document.getElementById("reset-button");
button.addEventListener('click', reset);


// flipCard(1);
// flipCard(3);

function createBoard() {
  for (var i = 0; i < cards.length; ++i) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
    }
}

createBoard();
