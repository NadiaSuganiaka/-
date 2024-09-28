//1
const serhiy = 'Сергій';

function greet(text){
    return 'Привіт ' + text;
}
console.log(greet(serhiy));

//2
const n = prompt('Enter your number: ');

function factorial(number) {
let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i; 
  }

  return result;

}
alert(factorial(n)); 

//3
const number = prompt('Enter your number: ');

function isEven(n) {
  if (n % 2 === 0) {
    return 'true';
  } else {
    return 'false';
  }
}

alert(isEven(number)); 

//4
const a = prompt('Enter your number: ');
const b = prompt('Enter power: ');

function power(a, b) {
    return a ** b;
}
alert(power(a, b));

//5
const reverseText = prompt("Enter the text: ");

function reverseString(text) {

  let reverse = text.split('').reverse().join('');

  alert(reverse);
    
}
reverseString(reverseText);

//6
const arr = [74, 46, 69, 82, 10];

function sumArray(arr) {
    let sum = 0; 
    for(let i = 0; i < arr.length; i ++){
      sum += arr[i];
    }
    console.log(sum); 
}
sumArray(arr);  

//7
let arrey = [0, 46, 69, 82, 11, 29, 2];
let newArray = [];

function filterOddNumbers(arr) {
  for(let i = 0; i < arr.length; i ++){
    if(arr[i] % 2 !== 0){
        newArray.push(arr[i]);
    }
  }

    return newArray;
}

console.log(filterOddNumbers(arrey));
