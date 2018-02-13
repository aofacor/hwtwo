// To execute this code, be sure you're in the right directory;
// (Mac)       cd ~/code/hw2
// (Windows)   cd c:\code\hw2
// Then type:
// node hw2.js

// HOMEWORK 2

// Cryptocurrency is all the rage. You have decided to create your own,
// KelloggCoin, that will massively disrupt financial markets at the Global
// Hub.

let blockchain = [
  { fromUser: null, toUser: "brian", amount: 21000 },
  { fromUser: "brian", toUser: "ben", amount: 9000 },
  { fromUser: "brian", toUser: "jeff", amount: 7000 },
  { fromUser: "ben", toUser: "jeff", amount: 400 },
  { fromUser: "brian", toUser: "jeff", amount: 1500 },
  { fromUser: "jeff", toUser: "brian", amount: 4500 },
  { fromUser: "jeff", toUser: "ben", amount: 1750 }
]


//every function in javascript is defined with function(){}
//we can call the parameter name whatever we want. This is another variable we are defining on the fly. What ever we call it is completely up to us.

let getBalance = function(user) {
  let runningTotal = 0;
  for (i=0; i<blockchain.length; i++) {
    let transaction = blockchain[i];
    if (transaction.fromUser === user) {
      runningTotal = runningTotal - transaction.amount;
      }
      if (transaction.toUser === user) {
        runningTotal = runningTotal + transaction.amount;
      }
  }
return runningTotal;
}

//getBalance is a function
console.log("Brian's KelloggCoin bal is " + getBalance("brian"));
console.log("Ben's KelloggCoin bal is " + getBalance("ben"));
console.log("Jeff's KelloggCoin bal is " + getBalance("jeff"));
