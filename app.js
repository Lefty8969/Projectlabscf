"use strict";

let userName = prompt("Hey, Welcome what is your name?");
userName = userName.toLowerCase();
//console.log(userName);
alert(`Hello ${userName} Thank for visiting me!`);

function jerkChickenQ() {
  let jerkChicken = prompt("Do I lke jerk chicken, answer yes or no??");
  jerkChicken = jerkChicken.toLowerCase();

  if (jerkChicken === "yes" || jerkChicken === "y") {
    //console.log('Thats my meal!');
    alert("Yes thats my meal!");
  } else if (jerkChicken === "no" || jerkChicken === "n") {
    //console.log(nope);
    alert("sorry, not my meal!");
  } else {
    alert("Its a simple yes or no!");
  }
}
jerkChickenQ();

function myTownQ() {
  let myTown = prompt("Do you think im from NYC?");
  myTown = myTown.toLowerCase();

  switch (myTown) {
    case "yes":
    case "y":
      //console.log ('Yass! exactamundo!');
      alert("are you stalking me?");
      break;
    case "no":
    case "n":
      //console.log(off the mapp);
      alert("Let me get you an atlas map!");
      break;
  }
}
myTownQ();

function usForcesQ() {
  let usForces = prompt("Was I in the Marine Corps?");
  usForces = usForces.toLowerCase();

  switch (usForces) {
    case "yes":
    case "y":
      //console.log('Im a proud marine!')
      alert("The Few and The Proud");
      break;
    case "no":
    case "n":
      //console.log('Respect my rank and get lost')
      alert("What ? Im not a civilian!");
      break;
  }
}

function softballQ() {
  let softball = prompt("Do I like softball? Yes or No?");
  softball = softball.toLowerCase();

  switch (softball) {
    case "yes":
    case "y":
      //console.log('Im a proud marine!')
      alert("That is correct");
      break;
    case "no":
    case "n":
      //console.log('Respect my rank and get lost')
      alert("What ? Im not cannibal ");
      break;
  }
}
softballQ();

function dogsQ() {
  let dogs = prompt("Do I have a dog?");
  dogs = dogs.toLowerCase();

  switch (dogs) {
    case "yes":
    case "y":
      //console.log('Im a proud marine!')
      alert("I do! Good job!");
      break;
    case "no":
    case "n":
      //console.log('Respect my rank and get lost')
      alert("I am Cesar Milan");
      break;
  }
}
dogsQ();
//let brothers= 1
//for(let i = 0; i<4; i++){
// let userNumber = prompt('Guess how many brothers I have?');
//parseInt(userNumber);
//}

function guessQ() {
  for (let i = 1; i < 5; i++) {
    let guess = prompt("How many brother do i have?");

    guess = Number(guess);
    if (guess === 5) {
      alert("How did you know!");
      break;
    }
  }
}
guessQ();

function carsQ() {
  let cars = ["honda", "nissan", "chevy"];

  let guessAttempts = 6;

  while (guessAttempts > 0) {
    guessAttempts--;
    let guess = prompt("Which car is mine?");
    let correctAns = false;
    // cars,length refers from beg to end to off array(123) and starts at index(i) 0 which honda
    for (let i = 0; i < cars.length; i++) {
      if (guess.toLowerCase === cars[i]) {
        alert("Great guess!");
        correctAns = true;
        break;
      }
    }
    if (correctAns === true) {
      break;
    } else {
      alert("sorry try again!");
    }
  }
}
carsQ();
