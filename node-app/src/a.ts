// function runAfter1s(fn: ()=> void){
//     setTimeout(fn, 1000);
// }
// runAfter1s(function(){
//     console.log('1s after');
// })

// const a:number = 1;

// function sum(a:number, b:number):number{
//     return a+b;
// }
// // can use this  interface in function so that np need to pass all the properties again and again 
// interface User{
//     name: string;
//     age: number;
//     email?: string;
// }
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
   
  greet("Maddison", new Date());