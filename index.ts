/**
 * Interface
 *  */
// basic interface
// is simply a named set of properties that describe a shape of an object
// By convention, the interface names are in the camel case.

interface Person {
  name: string;
  age: number;
  job?: string;
}

const person1: Person = {
  name: 'rabia',
  age: 28,
};

/**
 * function interface
 * */
// that used to describe the type of arguments and the return values for a function
interface Greeting {
  // (name: string, age: number): string;  //instead of do that
  (p: Person): string;
}
// const greetingPerson2: Greeting = (n, a) => {
//   return `hello ${n} you have ${a} `;
// };
// const grb2 = greetingPerson2("y", 33);
// console.log(grb2);
const greetingPerson: Greeting = (p) => {
  return `hello ${p.name} you have ${p.age}`;
};
const grb = greetingPerson(person1);
console.log(grb);
