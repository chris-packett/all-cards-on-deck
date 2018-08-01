let cards = []

const consoleCardList = () => {
  let suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds']
  let ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'Ace']
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      const card = ranks[j] + ' of ' + suits[i]
      cards.push(card)
    }
  }
  console.log(cards)
}

document.addEventListener('DOMContentLoaded', consoleCardList)