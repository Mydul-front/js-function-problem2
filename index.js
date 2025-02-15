// two number in the getar then solved

/* function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
const numbers = getMax(5, 7);
const number1 = getMax(5, 12);
const number2 = getMax(45, 7);
const number3 = getMax(5, 71);

console.log("The max number is :", numbers, number1, number2, number3); */

// 3 ta songkhar moddhe kon ta boro ata kmne nirnnoy korbo

/* function threeNumber(num1, num2, num3) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
const numbers = threeNumber(12, 34, 190);
console.log("The Maximum Number is :", numbers); */

// akti array er theke max number nirnoy

/* function menHeight(numbers) {
  let max = totalHeight[0];
  for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
const totalHeight = [65, 76, 98, 90, 50];
const height = menHeight(totalHeight);
console.log(height); */

// akti array er moddhe lowest number

/* const arr = [12, 45, 2, 67, 56, 98];

function toLowestNumber(numbers) {
  let min = arr[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}
const results = toLowestNumber(arr);
console.log(results); */

// array er modddhe object decliar  kora thakle function a kivabe call korbo?

/* const totalMobailes = [
  { name: "samsung", price: 200000, camera: "12 mp", color: "black" },
  { name: "apple", price: 200000, camera: "12 mp", color: "black" },
  { name: "pakiga", price: 250000, camera: "12 mp", color: "black" },
  { name: "miran", price: 200000, camera: "12 mp", color: "black" },
  { name: "mydul", price: 200000, camera: "12 mp", color: "black" },
  { name: "saseg", price: 200000, camera: "12 mp", color: "black" },
  { name: "realme", price: 200000, camera: "12 mp", color: "black" },
];

function totalPhone(numbers) {
  let max = totalMobailes[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i].price > max.price) {
      max = numbers[i];
    }
  }
  return max;
}
const results = totalPhone(totalMobailes);
console.log(results); */

// sopping total product

/* const prices = [300, 100, 400, 200];

const products = [
  { name: "sempoo", price: 300 },
  { name: "chironi", price: 100 },
  { name: "shirt", price: 600 },
  { name: "pant", price: 800 },
];

function totalSopping(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    sum = sum + numbers[i].price;
  }
  return sum;
}
const results = totalSopping(products);
console.log(results); */

// sopping card

/* const products = [
  { name: "sempoo", price: 300, quantity: 2 },
  { name: "chironi", price: 100, quantity: 3 },
  { name: "shirt", price: 600, quantity: 4 },
  { name: "pant", price: 800, quantity: 5 },
];

function totalProducts(numbers) {
  let sum =0;
  for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    const totalProductsCost = numbers[i].price * numbers[i].quantity;
    sum = sum + totalProductsCost;
  }
  return sum;
}
const results = totalProducts(products);
console.log(results); */

// discount card calculator

/* function discountCal(numbers){
  if(numbers < 50){
    const discaunt = numbers * 20;
    return discaunt;
  }
  else if(numbers < 100){
    const discaunt = numbers * 50;
    return discaunt;
  }
  else {
    const discaunt = numbers * 10;
    return discaunt;
  }

}
const results = discountCal(90);
console.log(results); */

// calculator simple calculation

/* function add(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function mul(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  return num1 / num2;
}

function totalCalculation(a, b, oparetion) {
  if (oparetion === add) {
    return add(a, b);
  } else if (oparetion === sub) {
    return sub(a, b);
  } else if (oparetion === mul) {
    return mul(a, b);
  } else if (oparetion === div) {
    return div(a, b);
  } else {
    return "only 'add','sub','mul','div' operation is allows ";
  }
}
const results = totalCalculation(6, 3, mul);
console.log(results); */

// use jodi number bad a onno kicu jei seikhane user ke akta sms show kortaite hbe..

/* function totalNumbers(num1 , num2){
  if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    console.log("Please create a number");
  }
  return num1 * num2;

}
const number = totalNumbers(4,'seven');
console.log(number); */

/* function fullName (first , second){
  if(typeof first !=='string'){
    return 'First name should be a string';
  }
  else if(typeof second !== 'string'){
    return 'Second name should be a string';
  }
  const full = first+ ' '+ second;
  return full;
}
const results = fullName('Mydul', 'Islam');
console.log(results); */

// jdi number bad a onno kicu dei tahla ay sms show korbe and tik vabe number dila output show korbe

/* function multiply(num1, num2) {
  if (typeof num1 !== "number") {
    return "Please Provide a number";
  }
  return num1 * num2;
}
const results = multiply(2 ,4);
console.log(results); */


