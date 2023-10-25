'use strict';

let userName = prompt('Hey, Welcome what is your name?');
userName = userName.toLowerCase();
//console.log(userName);
alert(`Hello ${userName} Thank for visiting me!`);

let jerkChicken = prompt ('Do I lke jerk chicken, answer yes or no??')
jerkChicken = jerkChicken.toLowerCase();

if (jerkChicken === 'yes' || jerkChicken === 'y'){
  //console.log('Thats my meal!');
  alert('Yes thats my meal!');
} else if (jerkChicken === 'no' || jerkChicken === 'n'){
  //console.log(nope);
  alert('sorry, not my meal!');
} else {
  alert('Its a simple yes or no!');
}

let myTown = prompt ('Do you think im from NYC?');
myTown = myTown.toLowerCase();

switch (myTown) {
  case 'yes':
  case 'y':
  //console.log ('Yass! exactamundo!');
  alert('are you stalking me?');
  break;
  case 'no':
  case 'n':
  //console.log(off the mapp);
  alert('Let me get you an atlas map!');
  break;
}



let usForces = prompt ('Was I in the Marine Corps?' );
usForces = usForces.toLowerCase();

switch (usForces) {
case  'yes':
case  'y':
  //console.log('Im a proud marine!')
  alert('The Few and The Proud');
  break;
case 'no':
case 'n':
  //console.log('Respect my rank and get lost')
  alert('What ? Im not a civilian!');
break;





}



