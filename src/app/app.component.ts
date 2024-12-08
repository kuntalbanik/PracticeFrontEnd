import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PracticeFrontEnd';
}

// Javascript practice
let x = [10,20,30,40,50,60];


// "for of"   loop example
for(let i of x){
  // console.log(i);
}


// regular for loop
for(let n=0; n < x.length; n++) {
  // apply 10% discount on all array value
  x[n] = x[n] - (x[n] / 10);
  // console.log(x[n]);
}
console.log(x);




// Arrow function example

// Normal function
function sum(a:number, b:number){
  return(a+b);
}
// console.log(sum(10,20));


// Arrow function
const arrowSum = (a:number, b:number) => { return (a+b); }
// "arrowSum" variable store the arrow function
console.log(arrowSum(10,20));

// Another example
const printHello = () => console.log("Hello");
printHello();


let text = "Hello World";
for(let data of text){
  if(data.toLowerCase() === 'a' || data.toLowerCase() === 'e' || data.toLowerCase() === 'i' || data.toLowerCase() === 'o' || data.toLowerCase() === 'u'){
    console.log("Vowel : ", data);
  }
  // console.log(data);
}

