// Class code examples

// This is a function that will be attached to the GLOBAL object
// Therefore the "this keyword will point to the global object"
function sayHelloFloating(person) {
  console.log("this object of a floating function: ", this);
  console.log(this.firstName);
}

sayHelloFloating();

const person = {
  firstName: "Jordi",
  age: 28,
  city: "Valencia",
  sayHello() {
    console.log(this.firstName);
  },
};

// This function is attached to "person1" object, and the "this" keyword will refer to the person1
person.sayHello();

const person2 = {
  firstName: "Daniel",
  age: 31,
  city: "Barcelona",
  sayHello() {
    console.log(`Buen dia, soy ${this.firstName}. I am ${this.age} years old`);
  },
};

person2.sayHello();

const abstractPerson = {
  sayHello() {
    return `Hello my name is ${this.name}`;
  },
  tellAge() {
    return `I am ${this.age} years young`;
  },
};

console.log("abstractPerson", abstractPerson.tellAge());

console.log(abstractPerson.tellAge.bind(person)());
