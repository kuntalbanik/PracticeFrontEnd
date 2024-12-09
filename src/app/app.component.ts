import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PracticeFrontEnd';
}

// Javascript practice
let x = [10, 20, 30, 40, 50, 60];



// "for of" loop example
for (let i of x) {
  // console.log(i);
}

// regular for loop
for (let n = 0; n < x.length; n++) {
  // apply 10% discount on all array value
  x[n] = x[n] - x[n] / 10;
  // console.log(x[n]);
}
// console.log(x);





// Arrow function example

// Normal function
function sum(a: number, b: number) {
  return a + b;
}
// console.log(sum(10,20));

// Arrow function
const arrowSum = (a: number, b: number) => {
  return a + b;
};
// "arrowSum" variable store the arrow function
// console.log(arrowSum(10, 20));






// Another example
const printHello = () => console.log('Hello');
// printHello();

// let text = 'Hello World';
let vowelCount:number = 0;

// vowel counter function
function vowelCounter(dataString:String) {
  for (let data of dataString) {
    if (
      data.toLowerCase() === 'a' ||
      data.toLowerCase() === 'e' ||
      data.toLowerCase() === 'i' ||
      data.toLowerCase() === 'o' ||
      data.toLowerCase() === 'u'
    ) {
      vowelCount++;
    }
    // console.log(data);
  }
  return vowelCount;
}
// console.log(vowelCounter("HelAAlo WoIIrlUUId!"));


// vowel counter arrow function
const vowelCon = (dataString:String) => {
  for (let data of dataString) {
    if (
      data.toLowerCase() === 'a' ||
      data.toLowerCase() === 'e' ||
      data.toLowerCase() === 'i' ||
      data.toLowerCase() === 'o' ||
      data.toLowerCase() === 'u'
    ) {
      vowelCount++;
    }
    // console.log(data);
  }
  return vowelCount;
};
// console.log(vowelCon("HelAAlo WoIIrlUUId!"));





// forEach() in arrays
// higher order method/function

let arrNum = [2,3,4,5,6];
let arr = ['delhi', 'pune', 'mumbai'];

// using normal function
arr.forEach(function printVal(val){
  // console.log(val);
});


// arrow function
arr.forEach((val, idx, arr) => {
  // console.log(val, idx, arr);
});

// calculate square
let calcSquare = (num:number) => {
  console.log(num * num);
};

arrNum.forEach(calcSquare);




// map() method/function
// creates a new array with the results of some operation

let newArr = arrNum.map((val) => {
  return val*val;
})
console.log(newArr);




// filter() method/function
// creates a new array with the filtered element 

let evenArr = arrNum.filter((val) => {
  return val % 2 === 0;
});

console.log(evenArr);
