//Renamed the hard coded values for the numbers to getRandomCard()

let cards = [];
let sum = 0;

let hasBlackjack = false;

let isAlive = false;

let message = "";

let messageEl = document.getElementById("message-el");

let cardsEL = document.getElementById("cards-el");

let sumEL = document.getElementById("sum-el");



let player = {
    name: "Player",
    
}
let playerChipEl = document.getElementById("player-chip")
let playerChip = 200





let playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + ": $" + playerChip;


//a function called startgame() but calls rendergame()
function startGame(){
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    renderGame()
    
}

// function that generates a random number
function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13) + 1;
    if (randomCard > 10){
        return 10
    }else if( randomCard === 1){
        return 11
    }else{
        return randomCard
    }
    
}




//button functions
function renderGame() {
    sumEL.textContent = "Sum: " + sum;

    cardsEL.textContent = "Cards: "
    // Loop that renders all the cards
    for (let i = 0; i < cards.length; i ++){
        cardsEL.textContent +=  cards[i] + " "
    }

    // conditions for the game
    if (sum <= 20) {
        message = "Do you want to draw a new card? ";

    } else if (sum === 21) {
        message = "Whoo! You've got Blackjack, Please Refresh to start over";
        hasBlackjack = true
        playerChip += 1
        playerChipEl.textContent ="New Bal: $" + playerChip
        
        
    } else {
        message = "You're out of the game!, Please start again";
        isAlive = false
        playerChip -= 1
        playerChipEl.textContent ="New Bal: $" +  playerChip
        
    }
    messageEl.textContent = message;
    
}


function newcard(){
    //logic that allows player to get a new card if she is alive and does not have Blackjack
    if (isAlive === true && hasBlackjack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
        
    }
    
    //Renamed the hard coded values for the numbers to getRandomCard()
    

}