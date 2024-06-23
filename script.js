"use strict";

/*
///////////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);


///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/
// Array method
// let a = [1, 2, 3];
// console.log(a.slice(3)); //[] return length 0
// console.log(a.slice(1, 2)); // [2] return from index 1 to
// console.log(a.slice(-1)); // [3] return from last index
// console.log(a.slice(1, -2)); //[]
// console.log(a.slice()); // [1, 2, 3] return all elements
// console.log(a.slice(1, -1)); //[1]

// ///Spli ce(Its change the original array)
// //dlt the array
// console.log(a.splice(1)); //[2,3]
// console.log(a.splice(2)); //[]
// console.log(a.splice(0, 1));
// [1];
// console.log(a); //[]
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
//reverse
// const arr = ["g", "h"];
// console.log(arr.reverse()); ["h","j"]
// console.log(arr);["h","j"]
/////concat
// const a = [7, 9];
// const l = a.concat(arr); // [7, 9, 'g', 'h']
// console.log(l);
///join
// console.log(l.join("-"));
//7 - 9 - g - h;
/////////////forEach
// const MouseEvents = [200, 34, -5];
// MouseEvents.forEach(function (move) {
//   if (move > 0) {
//   } else {
//   }
// });
// setTimeout(() => console.log("here"), 3000);
// console.log("waiitng.."); //first come waiitng..then here(Ayscronous js)

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction);

// function myFunction(num) {
//   return num * 10;
// }
// console.log(newArr); //(4) [650, 440, 120, 40]

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
// const numbers = [175, 50, 25];

// document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

// function myFunc(total, num) {
//   return total - num;
// }Normally, array element 0 is used as initial value, and the iteration starts from array element 1.

// If an initial value is supplied, this is used, and the iteration starts from array element 0.
// console.log(23 === 23.0);true
console.log("23");
console.log(Number.isNaN(20));
console.log(Number.isInteger(23.0));
console.log(25 ** (1 / 2));
console.log(Math.round(23.3)); //23
console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.9));
console.log(Math.trunc(-23.3)); //23
console.log(Math.floor(23.3)); //23
console.log((2.345).toFixed(2)); //2.35
// The Remainder Operator
console.log(5 % 2); //1
console.log(5 / 2); //2.5
