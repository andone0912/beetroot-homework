let name = prompt('what is your name?');
document.querySelector('#name').innerHTML = `Hello ${name}!`;

const age = prompt('What year were you born in?');
const currentYear = 2023;
document.querySelector('#age').innerHTML = `You are ${currentYear - age} years old!`;

const sideOfSquare = prompt('What is the length of one side of a square?(please type only the raw number)');
document.querySelector('#square').innerHTML = `The perimeter of the square is ${sideOfSquare * 4}`;

const radiusCircle = prompt('What is the radius of the circle?(please type only the raw number)');
document.querySelector('#circle').innerHTML = `The area of this circle is ${(314 * (radiusCircle ** 2)) / 100}`

const distance = prompt('how far away is your destination?(km)'); 
const time = prompt('In how much time do you want to get to your destination?(in minutes)');
document.querySelector('#speed').innerHTML = `If you want to get to your destination that is ${distance}km away in ${time} minutes then you need to move at ${(((distance * 1000) / time) * 60) /1000}km/h`

const moneyUsd = prompt('convert from usd to eur(put usd here)');
const moneyConvert = (moneyUsd * (0.944 * 1000)) / 1000;
document.querySelector('#money').innerHTML = `$${moneyUsd} is ${moneyConvert}EUR`

const gigaBytes = prompt('how many GB do you have on your computer?');
const file = 820;
document.querySelector('#space-computer').innerHTML = `if your memory space is ${gigaBytes}GB then you can download this file ${Math.round((gigaBytes * 1000) / 820)} times`

const wallet = prompt('how much money do you have?');
const price = prompt('how much does the chocolate cost?');
const calculate = Math.floor(((wallet * 100) / price) / 100);
const change =  wallet - (calculate * price); 
document.querySelector('#wallet').innerHTML = `you can buy ${calculate} chocolates with your money and you will be left with $${change} worth of spare change.`

const sum = prompt('how much money did you deposit?')
const interest = Math.round(((5 * 100) / 6) / 100);
const calculate2 = (sum / 100);
const total = Number(sum) + Number(calculate2); 
document.getElementById('deposit').innerHTML = `if you deposited $${sum} for 2 months with a 5% yearly rate then your total after 2 months will be roughly $${total}.`  