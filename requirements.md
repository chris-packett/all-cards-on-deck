### Requirements: 

- [x] Create a Deck of Cards in an array
    - [x] create an array of suits.
    - [x] create an array of ranks.
    - [x] create an empty array of cards called "deck".
    - [x] loop through each suit and push each rank for each suit into the cards array in the format of 
          '{rank} of {suit}'.
- [x] Implement the Fisher-Yates shuffling algorithm to shuffle said Deck of Cards every time the page loads.
    - [x] loop through the card indices in the data structure and swap a card for another *random* card that is a
          lower index.
    - [x] swap cards by using a temp variable.
- [x] Create an event-driven user interface to deal a card to the user.
    - [x] output should be the name of the card (MVP).
    - [x] implement a back of card button instead of a standard html button.
    - [x] pop and push 'deadCards.push(activeCards.pop())' where deadCards and activeCards are arguments of a              function called pushPop(deadCards, activeCards).
- [x] Make sure to update variable names based on txt file on main comp.
- [ ] Create the ability to have two players in the game (starting to implement "War").
    - [x] create two card buttons, one red, one blue.
    - [x] create two player battle card output labels under the card buttons.
    - [x] create a deal cards button.
    - [ ] create a battle button.
    - [ ] create two player card count output labels under the deal cards buttons.
    - [ ] create a restart button.
- [x] Deal cards to both players.
    - [x] when deal cards button is pressed, move half of deck[] to playerOneDeck[] and other half to 
          playerTwoDeck[].
    - [x] display card count for both players in card count output labels (they should be 26 each at the beginning).
- [x] When card button is pressed for both sides, trigger pushPop, moving the last card of each player's deck to a         new array for each player, called battleCardsPlayerOne[] and battleCardsPlayerTwo[].
    - [x] decrement the card count by 1.
- [ ] Implement a key-value pair system to be able to have comparison operators on the "battle".
    - [ ] thinking a dictionary?
- [ ] See who won the battle.
    - [ ] once battle button is pressed, compare 0th index of each player's battle array.
    - [ ] create a won cards array for each player. (call it "wonCardsPlayerOne and wonCardsPlayerTwo").
    - [ ] when a player wins, change color of battle card on display to green and store the two cards into the
          player's "won cards" array.
    - [ ] if war happens, pushPop 4 more cards to each player's battleCards array and compare 4th index. Then
          make a loop and pushPop through all indices of each battleCards array to winner's wonCards array.
- [ ] Once both players have no cards in their activeCards array, compare the length of each player's "won cards"          array. 
- [ ] Display the winner winner chicken dinner.
- [ ] Implement a "play again" function to be called after the game is over and clear all arrays, creating a new           deck of cards, restarting the process.