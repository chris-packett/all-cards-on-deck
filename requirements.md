### Requirements: 

- [x] Create a Deck of Cards in some sort of data structure (object or array)
    - [x] Create an array of suits
    - [x] Create an array of ranks
    - [x] Create an empty array of cards
    - [x] loop through each suit and push each rank for each suit into the cards array in the format of 
          '{rank} of {suit}'
- [ ] Implement the Fisher-Yates shuffling algorithm to shuffle said Deck of Cards every time the page loads
    - [ ] loop through the card indices in the data structure and swap a card for another card that is a lower index
- [ ] Create an event-driven user interface to deal a card to the user
    - [ ] loop through the shuffled Deck of Cards
    - [ ] output should be a card face up (MVP: key.value[0] + key.value[1])