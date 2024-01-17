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
  readonly id?: string;
}

const person1: Person = {
  name: 'rabia',
  age: 29,
  id: '01',
};

/**
 * function interface
 * */
// that used to describe the type of arguments and the return values for a function
interface Greeting {
  // (name: string, age: number): string;
  (p: Person): string; // better
}
// const greetingPerson2: Greeting = (n, a) => {
//   return `hello ${n} you have ${a} `;
// };
// const grb2 = greetingPerson2("y", 33);
// console.log(grb2);
const greetingPerson: Greeting = (p) => {
  return `hello ${p.name} you have ${p.age}`;
};
const grp = greetingPerson(person1);
// console.log(grp);

// person1.id = 02; // Cannot assign to 'id' because it is a read-only property.

// the function interface momkin fin tkhdm bih fi function libniti dwz param ma9lobin aw dwz param 1 o tkhli param 2 tal call
// but the argument should be passed when you call the function

interface StringFormat {
  (str: string, isUpper: boolean): string;
}

let lowerCase: StringFormat;
lowerCase = function (str: string) {
  return str.toLowerCase();
};

console.log(lowerCase('Hi', false));

/**
 * Class Interface
 */

//Interfaces are typically used as class types that make a contract between unrelated classes, by using keyword implements.

interface Json {
  toJson(): string;
}
class Perso implements Json {
  constructor(private fnmae: string, private lastName: string) {}
  toJson(): string {
    return JSON.stringify(this);
  }
}
let person2 = new Perso('John', 'Doe');
// console.log(person2.toJson());
