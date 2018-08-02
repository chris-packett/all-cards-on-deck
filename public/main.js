let deck = []
let playerOneDeck = []
let playerTwoDeck = []
let battleCardsPlayerOne = []
let battleCardsPlayerTwo = []
let cardValues
let filePath = './cardValue.json'
let cardValue


let request = new XMLHttpRequest()
request.open('GET', filePath)
request.responseType = 'json'
request.send()
request.onload = (card, card2) => {
  cardValues = request.response
  cardValue1 = cardValues[card]
  cardValue2 = cardValues[card2]
  if (cardValue1 > cardValue2) {
    return cardValue1
  }
  else if (cardValue2 > cardValue1) {
    return cardValue2
  }
}

const compareBattle = () => {
  let firstCard = "3 of Spades"
  let secondCard = "7 of Hearts"
  let highestCardValue = request.onload(firstCard, secondCard)
  console.log(highestCardValue)
}

const createDeck = () => {
  let suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds']
  let ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      const card = ranks[j] + ' of ' + suits[i]
      deck.push(card)
    }
  }
  // console.log(deck)
  shuffleCards()
}

const shuffleCards = () => {
  for (let i = 0; i < deck.length; i++) {
    const j = Math.floor(Math.random() * i)
    const tempCard = deck[i]
    deck[i] = deck[j]
    deck[j] = tempCard
    // console.log(deck[i])
  }
  // console.log(deck)
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
}

const drawCard = (battleCardDeck, playerDeck, cardOutputDisplay) => {
  const cardToDeal = battleCardDeck[pushPop(battleCardDeck, playerDeck) - 1]
  document.querySelector(cardOutputDisplay).textContent = cardToDeal
  console.log(playerDeck)
  console.log(battleCardDeck)
}

const updateCardCounter = (playerDeck, cardCountDisplay) => {
  const newCount = playerDeck.length
  document.querySelector(cardCountDisplay).textContent = newCount
}

document.addEventListener('DOMContentLoaded', createDeck)
document.querySelector('.deal-cards-button').addEventListener('click', dealCards)
document.querySelector('#red-card').addEventListener('click', () => drawCard(battleCardsPlayerOne, playerOneDeck, '#card-output-one'))
document.querySelector('#blue-card').addEventListener('click', () => drawCard(battleCardsPlayerTwo, playerTwoDeck, '#card-output-two'))
document.querySelector('#red-card').addEventListener('click', () => updateCardCounter(playerOneDeck, '#card-count-output-value-one'))
document.querySelector('#blue-card').addEventListener('click', () => updateCardCounter(playerTwoDeck, '#card-count-output-value-two'))



