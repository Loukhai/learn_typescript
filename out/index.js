"use strict";
const person1 = {
    name: "rabia",
    age: 28,
};
// const greetingPerson2: Greeting = (n, a) => {
//   return `hello ${n} you have ${a} `;
// };
// const grb2 = greetingPerson2("y", 33);
// console.log(grb2);
const greetingPerson = (p) => {
    return `hello ${p.name} you have ${p.age}  `;
};
const grb = greetingPerson(person1);
console.log(grb);
