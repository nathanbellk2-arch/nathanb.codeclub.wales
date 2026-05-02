
'use strict';

let hasDriversLicsence = false;
const passTest = true;

if(passTest) hasDriversLicsence = true;
if(hasDriversLicsence) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;





function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
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

const age1 = calcAge1(1991);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


// Arrow function
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log (yearsUntilRetirement(1991, 'Jonas')); 
console.log (yearsUntilRetirement(1980, 'Bob'));



function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProccesor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProccesor(2, 3));


const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;
    // return retirement
    return `${firstName} retires in ${retirement} years`;
}
yearsUntilRetirement(1991, 'Jonas');



































const calcAverage =(a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins,scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆  (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins. scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

*/

const friend1 = 'Michael';
const friend2 = 'Steebie';
const friend3 = 'Peter';


console.log(friends[friends.length - 1]);

// Arrow function
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

console.log (yearsUntilRetirement(1991, 'Jonas')); 
console.log (yearsUntilRetirement(1980, 'Bob'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}
const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

function fruitProccesor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}