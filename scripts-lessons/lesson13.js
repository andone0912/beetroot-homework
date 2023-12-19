function calculateArray() {
  const getNumber = Number(document.getElementById('number').value)
  let arrayGet = [];
  const showSum = document.getElementById('sum')
  let sum = 0;
  for (let i = getNumber; i > 0; i--) {
    arrayGet.unshift(i)
  }
  for (let i = 0; i < arrayGet.length; i++) {
    sum += arrayGet[i];
  }
  showSum.innerHTML = sum
}

function largestDivisor() {
const num1 = document.getElementById('first-number').value
const num2 = document.getElementById('second-number').value

function getFactors(num) {
  let n1 = num
  const fs = []

  while (n1 !== 1) {
    for (var i = 2; n1 % i; i++) {

    };
    n1 = n1 / i;
    fs.push(i)
  }
  return fs
}

var fs1 = getFactors(num1);
var fs2 = getFactors(num2);

function countNumbers (ns) {
  let count = {}
  for (var i = 0;  i < ns.length; i++) {
  if (count[ns[i]]) {
    count[ns[i]]++
  } else {
    count[ns[i]] = 1
  }
}
  return count
}

var c1 = countNumbers(fs1)
var c2 = countNumbers(fs2)

const d = Object.keys(c1).map(s => +s).reduce((divisor, f) => {
  if (c2[f]) {
    return divisor * f ** Math.min(c1[f], c2[f])
  } else {
    return divisor
  }
}, 1)
 document.getElementById('largest-divisor').innerText = d
}



function calculateAllDivisors() {
function getDivisors() {
  let number = Number(document.getElementById('number-to-divide').value)
  let n1 = number
  const fs = []

  while (n1 !== 1) {
    for (var i = n1; number % i; i--) {
      
    };
    n1 = n1 - 1
    if (number % i === 0) {
      fs.push(i)
    }
  }
  return fs
}
const fs3 = getDivisors();
function removeDuplicates(data) {
  return data.filter((value, index) => data.indexOf(value) === index)
}
 document.getElementById('all-divisors').innerText = removeDuplicates(fs3);
}

function placeDiv() {
function calculateDigits() {
const number = document.getElementById('count-digits').value
const array = number.split('')
const digits = array.length
return digits
}
document.getElementById('number-digits').innerText = calculateDigits()
}

function decideNumbers() {
const numbers = document.querySelector('#ten-numbers').value;
let result = [...new Set(numbers.split(" ").map(Number))];
let negative = []
let positive = []
let zero = []
let odd = []
let even = []
for (let i = 0; i < result.length; i++){
  if(result[i] > 0){
    positive.push(result[i])
  } else if ( result[i] === 0) {
    zero.push(result[i])
  } else if( result[i] < 0) {
    negative.push(result[i])
  }
}

for (let i = 0; i < result.length; i++){
  if(result[i] % 2 === 0) {
    even.push(result[i])
  } else {
    odd.push(result[i])
  }
}

document.querySelector('#positive').innerHTML = positive;
document.querySelector('#negative').innerHTML = negative;
document.querySelector('#odd').innerHTML = odd;
document.querySelector('#even').innerHTML = even;
document.querySelector('#zero').innerHTML = zero;
}

function randomCalculation() {
const n1 = document.querySelector('#n1').value;
const symbol = document.querySelector('#symbol').value
const n2 = document.querySelector('#n2').value;
const result =`${n1} ${symbol} ${n2}`;
const realResult = eval(result)
document.querySelector('.answer').innerHTML = `${result} = ${realResult}` 
document.querySelector('#n1').value = ''
document.querySelector('#symbol').value = ''
document.querySelector('#n2').value = ''
}

function moveNumbers() {
  const n1 = document.querySelector('#list').value;
  const moveBy = Number(document.querySelector('#move-by').value);
  console.log(document.querySelector('#list').value);
  let arr = []
  arr = n1.toString().split('')
  const numbersToMove = arr.slice(0, moveBy);
  const numbersLeft = arr.slice(moveBy, arr.length)
  for( let i = 0; i < numbersToMove.length; i++) {
    numbersLeft.push(numbersToMove[i])
  }
  console.log(numbersLeft)
  document.querySelector('.oldList').innerHTML = `${arr}`
  document.querySelector('.newList').innerHTML = `${numbersLeft}`
}
const h = document.querySelector('#calc')
//h.addEventListener("click", moveNumbers)