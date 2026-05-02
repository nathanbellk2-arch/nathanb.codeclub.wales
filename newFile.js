/*

'use strict';

let hasDriversLicsence = false;
const passTest = true;

if(passTest) hasDriversLicsence = true;
if(hasDriversLicsence) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

*/

function logger() {
  console.log('My name is Nathan');
}

// calling
logger();
logger();
logger();
logger();

function fruitProccesor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and $ {oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProccesor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProccesor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');








// Function declaration
function calcAge1(birthYear) {
    const age = 203
}