
const num = prompt('please type in a 3-digit number');
const digits = num.toString().split('');
const getId = document.getElementById('identical-digits-test');
if (digits[0] === digits[1] && digits[2] === digits[0]) {
  getId.innerHTML = `Your number is ${num}. This number has 3 identical digits.`;
} else if (digits[0] === digits[1] || digits[0] === digits[2] || digits[1] === digits[2]) {
  getId.innerHTML = `Your number is ${num}. This number has 2 digits that are identical.`;
} else {
  getId.innerHTML = `Your number is ${num}. All digits are different.`;
}

const palindrome = prompt('please type in a 5-digit number');
const palindromeDigits = palindrome.toString().split('');
const getPalindrome = document.getElementById('palindrome-test');
if (palindromeDigits[0] === palindromeDigits[4] && palindromeDigits[1] === palindromeDigits[3]) {
  getPalindrome.innerHTML = `This number is a palindrome(${palindrome})`;
} else {
  getPalindrome.innerHTML = `This number is not a palindrome(${palindrome})`;
}

function calculateCurrency() {
  const inputId = document.querySelector('#USD').value;
  document.getElementById('EUR').innerHTML = `${(inputId * (0.95 * 100)) / 100} EUR`;
  document.getElementById('SEK').innerHTML = `${(inputId * (11.17 * 100)) / 100} SEK`;
  document.getElementById('AUD').innerHTML = `${(inputId * (1.58 * 100)) / 100} AUD`;
}

const circumference = prompt('type in a number for the circumference of the circle');
const perimeter = prompt('type in a number for the perimeter of the square');
const heightCircle = Math.round((circumference / (2 * 3.14)) * 2);
const heightSquare = perimeter / 4;
const place = document.getElementById('place');
const yourNumber = document.getElementById('your-number');
if(heightCircle > heightSquare) {
  yourNumber.innerHTML = `the diameter of the circle is ${heightCircle}cm while the height and width of the square is ${heightSquare}.`
  place.innerHTML = `because your circumference was ${circumference}cm and your perimeter was ${perimeter}cm, the square fits inside the circle.`
} else {
  yourNumber.innerHTML = `the diameter of the circle is ${heightCircle}cm while the height and width of the square is ${heightSquare}.`
  place.innerHTML = `because your circumference was ${circumference}cm and your perimeter was ${perimeter}cm, the square does not fit inside the circle.`
}

function calculateNextDay() {
  const date = document.getElementById('date').value;
  const numberSplit = date.toString().split('');
  const dateSplit = [numberSplit[0] + numberSplit[1], numberSplit[3] + numberSplit[4], numberSplit[6] + numberSplit[7]]
  const calculateLeap = '20' + dateSplit[2];
  const x = document.getElementById('next-day')
  function calculateDay(number) {
    if (Number(dateSplit[0] > number)) {
      x.innerHTML = 'this is not a valid date.'
    } else if (Number(dateSplit[0]) === number) {
      dateSplit[1] = Number(dateSplit[1]) + 1
      dateSplit[0] = 1;
      x.innerHTML = `${dateSplit[0]}/${dateSplit[1]}/${dateSplit[2]}`
    } else {
      dateSplit[0] = Number(dateSplit[0]) + 1
      x.innerHTML = `${dateSplit[0]}/${dateSplit[1]}/${dateSplit[2]}`
    }
  }
  if (Number(dateSplit[1]) < 12 && Number(dateSplit[1]) === 0o4 || Number(dateSplit[1]) === 0o6 || Number(dateSplit[1]) === 9 || Number(dateSplit[1]) === 11) {
      calculateDay(30)
  } else if(Number(dateSplit[1]) === 12) {
    if(Number(dateSplit[0]) === 31) {
      dateSplit[0] = 0o1;
      dateSplit[1] = 0o1;
      dateSplit[2] = Number(dateSplit[2]) + 1;
      x.innerHTML = `${dateSplit[0]}/${dateSplit[1]}/${dateSplit[2]}`
    } else {
      dateSplit[0] = Number(dateSplit[0]) + 1;
      x.innerHTML = `${dateSplit[0]}/${dateSplit[1]}/${dateSplit[2]}`
    }
  } else if(Number(dateSplit[1]) < 12 && Number(dateSplit[1]) === 0o1 || Number(dateSplit[1]) === 0o3 || Number(dateSplit[1]) === 0o5 || Number(dateSplit[1]) === 0o7 || Number(dateSplit[1]) === 8 || Number(dateSplit[1]) === 10) {
      calculateDay(31)
  } else if(Number(dateSplit[1]) < 12 && Number(dateSplit[1]) === 0o2) {
    if (Number(calculateLeap) % 4 === 0 || Number(calculateLeap) % 400 === 0) {
      calculateDay(29)
    } else {
      calculateDay(28)}
  }
}
