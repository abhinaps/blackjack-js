const messageEl = document.getElementById("message-el")
const arrayEl = document.getElementById("array")
const sumEl = document.getElementById("sum")
const startEl = document.getElementById("start")
const cardsEl = document.querySelector("#cardstr")
const newCardEl = document.querySelector("#newcard")
const playerEl = document.querySelector("#player")


function start(){
    var temp1 = Math.floor(Math.random()*10 + 2)
    var temp2 = Math.floor(Math.random()*10 + 2)
    var cards = [temp1, temp2]
    return cards
}
function cardsum(cards){
    var sum = 0
    for (i =0; i<cards.length; i++){
        sum += cards[i]
    }
    return sum
}


var cards = []
var cardsstr = ""
var sum = 0
var isalive = false
var isblackjack = false
var player = {
    name:"per" ,
    chips: 100
}

function startgame(){
    cards = start()
    cardsstr =  cards[0] + " " + cards[1]
    sum = cardsum(cards)
    isalive = true
    blackjack()
    playerEl.innerHTML = player.name + " : $" + player.chips
}

function blackjack(){
    if (sum <= 20){
        messageEl.innerHTML = "Want to play a round?"
        sumEl.innerHTML = "Sum : " + sum
        cardsEl.innerHTML = "Cards : " + cardsstr
    }else if(sum === 21){
        messageEl.innerHTML = "You've got Blackjack!"
        player.chips += 10
        isblackjack = true
    }else {
        messageEl.innerHTML = "You're out of the game!"
        player.chips -= 20
        isalive = false
    }
}

function newcard(){
    if (isalive && !isblackjack){
        temp1 = Math.floor(Math.random()*10 + 2)
        sum += temp1
        blackjack()
        sumEl.innerHTML = "Sum : " + sum
        cardsEl.innerHTML += " " + temp1
        playerEl.innerHTML = player.name + " : $" + player.chips
    }   
}