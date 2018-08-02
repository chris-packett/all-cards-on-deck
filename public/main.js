let deck = []
let playerOneDeck = []
let playerTwoDeck = []

const createDeck = () => {
  let suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds']
  let ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'Ace']
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      const card = ranks[j] + ' of ' + suits[i]
      deck.push(card)
    }
  }
  console.log(deck)
  shuffleCards()
}

const shuffleCards = () => {
  for (let i = 0; i < deck.length; i++) {
    const j = Math.floor(Math.random() * i)
    const tempCard = deck[i]
    deck[i] = deck[j]
    deck[j] = tempCard
  }
  console.log(deck)
}

const pushPop = (playerDeck, deck) => {
  return playerDeck.push(deck.pop())
}

const dealCards = () => {
  const _deckLength = 26
  for (let i = 0; i < _deckLength; i++) {
    pushPop(playerOneDeck, deck)
    pushPop(playerTwoDeck, deck)
  }
  console.log(playerOneDeck)
  console.log(playerTwoDeck)
  console.log(deck)
}

document.addEventListener('DOMContentLoaded', createDeck)
document.querySelector('.deal-cards-button').addEventListener('click', dealCards)

// const drawCard = () => {
//   const cardToDeal = deadCards[pushPop(deadCards, deck) - 1]
//   document.querySelector('#card-output-one').textContent = cardToDeal
// }

// document.querySelector('#red-card').addEventListener('click', drawCard)
