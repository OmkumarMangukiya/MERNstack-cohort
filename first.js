/* eslint-disable unicorn/prefer-module */
/* eslint-disable unicorn/no-array-callback-reference */
/* eslint-disable n/prefer-global/process */
/* eslint-disable no-undef */
console.log('Hello');
const accumulatorId = 230_310_198_404; // Cant be changed
const accumulatorName = 'John'; // Can be changed
const accumulatorPassword = '123456'; // Can be changed not recommended as it is global
accountCity = 'New York'; // Can be changed not recommended as it is global
let accumulatorState;

console.table([accumulatorId, accumulatorName, accumulatorPassword, accountCity, accumulatorState]);
// Alert("Hello") // not allowed in Node.js but allowed in browser
console.log(typeof accumulatorId);

const value = '3abc';
const valueInNumber = Number(value);
console.log(typeof valueInNumber);
console.log(valueInNumber);
/* Hence here we can see that if a string has character as well as number then it's type will be number ,but it will
be NaN */
const list = [1, 2, 3, 4, [5, 5]];
console.log(list + ' \nlength is ' + list.length + ' \nfirst element is ' + list[0] + '\nlast element is ' + list.at(-1));
// List = [1,2,3,4,5,6] // not allowed as list is const
list[0] = 10; // Allowed as we are changing the value of 0th index
console.log(list);
console.log(list.indexOf(10));
console.log(list.push(Number(5)));
// List.shift() // removes the first element // oppo of shift is unshift
list.splice(1, 1); // Removes the element at index 1
function double(number_) {
	return number_ * 2;
}

const doubled = list.map(double);
console.log(doubled);
const readline = require('node:readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('Enter your name: ', name => {
	console.log(`Hello ${name}`);
	readline.close();
});
