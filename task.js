// Find the lowest number in the array below.

/* const heights2 = [167, 190, 120, 165, 137];

function totalNumbers(numbers){
     let min = heights2[0];
     for(let i=0; i<numbers.length; i++){
          // console.log(numbers[i])
          if(numbers[i] < min){
               min =numbers[i];
          }
     }
     return min;

}
const results = totalNumbers(heights2);
console.log(results); */

// Find the friend with the smallest name....string thakle length dite hbe nahla small ta ber kora jabe na...
/* const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function totalNames(names){
     let small = heights2[0];
     for(let i=0; i<names.length; i++){
          if(names[i].length < small.length){
               small = names[i];
          }
     }
     return small;

}
const name = totalNames(heights2);
console.log(name); */

// total koto tk lagbe seta ber kora

/* const prices = [{ laptop: 35000 }, { tablet: 15000 }, { mobile: 20000 }];

function totalNumbers(numbers) {
  let sum = numbers[0].laptop + numbers[1].tablet + numbers[2].mobile;

  return sum;
}

const results = totalNumbers(prices);
console.log(results); */
// jdi price ktha ta na thake tahla amra ki korbo...sudu laptop:300 tk....

// avg price in the phone

/* const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function totalPhones(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    //     console.log(numbers[i]);
    sum = sum + numbers[i].price;
  }
  
  const avg = sum / numbers.length;
  return avg;
}
const results = totalPhones(phones);
console.log(results); */


// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.


 const employees = [
   { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
   { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
   { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
   { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
 ];

 function totalEmployees(numbers){
     let sum =0;
     for(let i=0; i<numbers.length; i++){
          // console.log(numbers[i])
          

     }


 }
 const results = totalEmployees(employees);
 console.log(results);