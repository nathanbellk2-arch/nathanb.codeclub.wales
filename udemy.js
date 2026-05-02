









/*
let js = "amazing";
console.log(40 + 8 +23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name  coventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.145;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'Programmer';
let job2 = 'Teacher';

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof javascriptIsFun);
// console.log(type of 'Jonas');

javascriptIsFun = 'YES!';
console.log(type of javascriptIsFun);

let year;
console.log(year)
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);


const now = 2037;
const ageJonas = 2037 - 1991;
const ageSarah = 2037 - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas'
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Asignment operators
let x = 10 + 5; // 15
x += 10; //x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison omperators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018)

*/

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = ageJonas + ageSarah / 2
console.log(ageJonas, ageSarah, averageAge);



















/*
//const massMark = 78;
//const heightMark = 1.69;
//const massJohn = 92
//const heightJohn = 1.95

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark **2
const BMIJohn = massJohn / (heightJohn * heightJohn);
console(BMIMark, BMIJohn);

console.log(BMIMark, BMIJohn, markHigherBMI);


const firstName = 'Jonas';
const job = 'teachher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear)
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew)

console.log(`Just a reguar string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
8

const age = 19;

if(age >= 18) {
console.log('Sarah can start driving license 🚗')
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another $ {yearsLeft} years :)`);
}

const birthYear = 1998;

let century;
if(birthYear  <= 2000) {
  let century = 20;
} else {
  let century = 21;
}
console.log(century);























const massMark = 95;
const heightMark = 1.88
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn)

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI (${BMI Mark})is higher than John's ($BMIJohn})!"`)
} else {
  console.log("John's BMI (${BMIJohn}) is than Mark's (${BMIMark})!"`)
} 







const inputYear = '1991;'
console.log(Number(inputYear));
console.log(inputYear + 18);

console.log(Number('Jonas'));
console.log(typeof NaN)

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10'  - 3);
console.log('23' / '2');


let n = '1' + '1';
n = n - 1;
console.log(n);
chat gpt

// 5 falsy values:0, ", undefined,null, NAN
 
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money) {
  console.log("Don's spend it all ;)")
} else{
  console.log('you should get a job!');
}

let height = 0;
if (height {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED')
}


const age = 18;
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt ("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) {
  console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else{
  console.log('Number is not 23 or 7 or 9')
}

if ( favourite !== 23) console.log('Why not 23?');



const hasDriversLicense = true; // A
const hasGoodVison = true; // B

console.log(hasDriversLicense && hasGoodVison);
console.log(hasDriversLicense || hasGoodVison);
console.log(!hasDriversLicense);

// if(hasDriversLicense && hasGoodVison) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...')
// }

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVison && isTired);

if(hasDriversLicense && hasGoodVison) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...')
}























// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

//if (scoreDolphins > scoreKoalas) {
//  console.log('Dolphins win the trophy 🏆🏆🏆');
// } else if (scoreKoalas > scoreDolphins) {
//  console.log('Koalas win the trophy 🏆🏆🏆');
// } else if(scoreDolphins===scoreKoalas) {
//  console.log('Both win the trophy!');
// }

// Bonus 1
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console. log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy 🏆🏆🏆');
} else if (scoreKoalas > scoreDolphins) {
  console.log('Koalas win the trophy 🏆🏆🏆');
} else if(scoreDolphins===scoreKoalas) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}
chat gpt

const day = 'monday';

switch (day)
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case ' thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'Sunday';
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!')
}


















3 + 4
1991
true && false && !false
if (23 > 10) {
  const str = '23 is bigger';
}


const me = 'Jonas'
console.log(`I'm ${2037 - 1991} years old ${me}`)

chat gpt

const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${ age >= 18 ? 'wine 🍷' : 'water 💧'}`);

 

















*/

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15
console.log(`The bill was 275, the tip, was 41.25, and the total value 316.25`)
