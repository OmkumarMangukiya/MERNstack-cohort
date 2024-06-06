const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());
let myString = JSON.stringify(person);
console.log(myString);


person.fullName = person.fullName.toString();
let myString2 = JSON.stringify(person);
console.log(myString2);

// Accessor = Getter and Setter

const obj = {
    _name: [], // _name is a convention for private variable
    set name(value) {
        this._name = value;
    },
    get name() {
        return this._name;
    }
};
obj.name = "John"; // _name is private and cannot be accessed directly // also it is better then using _name directly as it is more secure
// document.getElementById("demo").innerHTML = obj.name; // Getter

// Define object
const count = {counter : 0};

// Define setters and getters
Object.defineProperty(count, "reset", {
    get : function () {this.counter = 0;}
});
Object.defineProperty(count, "increment", {
    get : function () {this.counter++;}
});
Object.defineProperty(count, "decrement", {
    get : function () {this.counter--;}
});
Object.defineProperty(count, "add", {
    set : function (value) {this.counter += value;}
});
Object.defineProperty(count, "subtract", {
    set : function (value) {this.counter -= value;}
});

// Play with the counter:
count.reset;
count.subtract = 1;
count.increment;
count.decrement;
count.add = 5;
console.log(count.counter);


// Object Constructor
function Person(name,age,city){
    this.name = name;
    this.age = age;
    this.city =city;
    this.detail = function(){
        return `${this.name} is ${this.age} years old and lives in ${this.city}`;
    }
}
const zeel = new Person("Zeel",18,"Surat");
console.log(zeel.detail());

Object.getPrototypeOf(person);
