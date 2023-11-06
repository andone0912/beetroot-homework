function calculateArray() {
  const getNumber = document.getElementById('number').value
  let arrayGet = [];
  for (let i = getNumber; i < 1; i - 1) {
    arrayGet.push(i)
  }
  console.log(arrayGet);
  //const arraySum = arrayGet.split('')
  //const showSum = document.getElementById('sum')
  //let sum = 0;
  //const arrayNumbers = arraySum.map(function(str) {
  //  return parseInt(str);});
  //for (let i = 0;i < arrayNumbers.length; i++) {
  //  sum += arrayNumbers[i];
  //}
  //showSum.innerHTML = sum
}
