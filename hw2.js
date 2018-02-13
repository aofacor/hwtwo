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


let wallet = [
{user:"brian", bal: 0},
{user:"ben", bal: 0},
{user:"jeff", bal: 0}
]

  let balance = function(userwallet){
    for (let x=0; x< wallet.length; x++)
    {if (wallet[x].user === userwallet)
    return wallet[x].bal}
  }

  for (let x = 0; x < blockchain.length; x++) {
    for (let y = 0; y < wallet.length; y++) {
      if (blockchain[x].toUser === wallet[y].user) {
       wallet[y].bal += blockchain[x].amount
     }
      else if (blockchain[x].fromUser === wallet[y].user){
        wallet[y].bal -=  blockchain[x].amount
      }
    }
  }

  console.log("Brian's KelloggCoin bal is " + balance("brian"));
  console.log("Ben's KelloggCoin bal is " + balance("ben"));
  console.log("Jeff's KelloggCoin bal is " + balance("jeff"));
