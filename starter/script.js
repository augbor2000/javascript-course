/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function =27;

let person ='jonas';
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof (true));
console.log(typeof (javascriptIsFun));
//console.log(typeof (23));
//console.log(typeof ('Jonas'));

javascriptIsFun = "YES!";
console.log(typeof (javascriptIsFun));

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);



//LET,CONST & VAR
//----------------

//REASSIGN 
let age = 31;
age = 31;

// Value does not change
const birthYear = 1991;
//birthYear=1990; //ERROR

//const =job; // ERROR we need to initialize a value to job

// Similar with let 
// Old way
var job = "programmer";
job = "teacher";


//BASIC OPERATORS
//---------------
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);


console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 -> 2to the power of 3->2*2*2

const firstName = "Jonas";
const lastName = "Schmedtman";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 =25 Reassign
x *= 4; // x = x * 4 = 100
x++; //x = x+1
x--; // x = x - 1
console.log(x);

// Comparison operrators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

//FIRST CHALLENGE
//----------------

const massMark = 78.0;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJoh = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJoh;

console.log(BMIMark, BMIJoh, markHigherBMI);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(jonasNew);

console.log(`Just a regular string ....`);

console.log('String with \nmultiple \nlines');

console.log(`String with 
multiple
lines`);
*/

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving licence 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}
