// JavaScript

// create cards array storing value of all the cards
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let isStartGame = false
let message = ''

let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")

let player = {
    name : "Guest",
    chips : 145
}

let playerInfo = document.getElementById("player-info")
playerInfo.innerHTML = player.name + ": $" + player.chips 

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard() 
    cards = [firstCard, secondCard]
    isAlive = true
    isStartGame = true
    sum = cards[0] + cards[1]
    renderGame()
}


function renderGame() {
    if (sum <= 20){
        message = 'Do you want to draw a card?' 
    } else if(sum === 21){
        message = 'You Win!\nYou have got a Black jack'
        hasBlackJack = true
    }else {
        message = 'You Lose!\nYou are out of the hand'
        isAlive = false
    }

    messageEl.innerHTML = message
    cardEl.innerHTML = 'Cards: '
    for (let count = 0; count < cards.length; count++) {
        cardEl.innerHTML +=  cards[count] + ' / '
    }  
    sumEl.innerHTML  = 'Sum: ' + sum
}

function getRandomCard(){
     let randomCard = Math.floor ( Math.random() * 13 ) + 1 
     if (randomCard === 1) {
        return randomCard = 11
     } else if((randomCard === 11) || (randomCard === 12) || (randomCard === 13) ) {
        return randomCard = 10
     } else{
        return randomCard
     }
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }    
}






