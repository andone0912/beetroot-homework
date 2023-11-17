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

const numbers = '-1 2 3 4 5 7 8 9 1 -6';


