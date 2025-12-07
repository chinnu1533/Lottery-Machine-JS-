const prompt =  require("prompt-sync")();

function deposit(){
   while(true){
      
     const depositAmount = prompt("Enter bet ammount: ");
     const numberDepositAmount = parseFloat(depositAmount);

     if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("invalid deposit, try gain");
     }else{
      return numberDepositAmount;
     }
   };
};

function getNumberOfLines(){
   while(true){
      
     const lines = prompt("Enter no.of lines to bet on (1-3): ");
     const numberlines = parseFloat(lines);

     if (isNaN(numberlines) || numberlines <= 0 || numberlines > 3) {
        console.log("invalid lines, try gain");
     }else{
      return numberlines;
     }
   };
};

function getBet(balance, numberOfLines){
   while(true){
      
     const bet = prompt("Enter bet amount per line: ");
     const numberBet = parseFloat(bet);

     if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / numberOfLines) {
        console.log("invalid bet amount, try gain");
     }else{
      return numberBet;
     }
   };
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);