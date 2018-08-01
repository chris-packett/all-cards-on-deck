let activeCards = []
let deadCards = []

const createDeck = () => {
  let suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds']
  let ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'Ace']
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      const card = ranks[j] + ' of ' + suits[i]
      activeCards.push(card)
    }
  }
  console.log(activeCards)
  shuffleCards()
}

const shuffleCards = () => {
  for (let i = 0; i < activeCards.length; i++) {
    const j = Math.floor(Math.random() * i)
    const tempCard = activeCards[i]
    activeCards[i] = activeCards[j]
    activeCards[j] = tempCard
  }
  console.log(activeCards)
}

document.addEventListener('DOMContentLoaded', createDeck)