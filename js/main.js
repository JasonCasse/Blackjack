//namespacing
var Blackjack = (function () {
    /* card class*/
    /* 
    constructor
    @param {String} rank
    @param {String} suit
    */
    function Card(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }

    /*
    gets the value or points of the card
    @param {Integer} currentTotal - The current total score of 
    the player's hand
    */
   Card.prototype.getValue = function(currentTotal){
       var value = 0;

    if (this.rank == 'A' && currentTotal < 11){
        value = 11;
    }else if( this.rank == 'A') {
        value == 1;

    }else if(this.rank == 'K' || this.rank == 'Q' || this.rank == 'J'){
        value = 10; 

    }else{
        value = parseInt(this.rank);
    }
    return value;
}

/*********** Render Card ******/
Card.prototype.view = function(){
    var cardSymbols = {
        'spades' : '&#9824',
        'hearts' : '&#9829',
        'clubs' : '&#9827',
        'diamonds' : '&#9830;'
    }
    return `
        <div class="card ` + this.suit + `">
            <div class="top rank">` + this.rank + `</div>
            <div class="suit">` + cardSymbols[this.suit] + `</div>
            <div class="botton rank">` + this.rank + `</div>
        </div>    
    `;        
}


 /* ******  PLAYER CLASS ******
  * @param {String} element - The DOM element
   @param  {Array} hand - the array which holds all the cards*/   

 function Player(element, hand) {
     this.hand = hand;
     this.element = element;
 }

 /* 
 Hit player with new card from the deck
 @param {Card} card - the card to deal to the player
 */
Player.prototype.hit = function(card){
    this.hand.push(card);
}

/*
Returns the total score of all the cards in the hand of a player
*/

Player.prototype.getScore = function(){
    var points = 0;
    for(var i = 0; i < this.hand.length; i++) {
        if(i == 0) points = this.hand[i].getValue(0);
        else points += this.hand.getValue(points);
    }
    return points;
}

/*
Returns the array (hand) of cards
*/

Player.prototype.showHand = function(){
    var hand = "";
    for(var i = 0; i < this.hand.length; i++){
        hand += this.hand[i].view();
    }
    return hand;
}







})

