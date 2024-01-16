/**
 * Generics
 * */

// 1. what's is it:

function getRandomNumberElement(arr: number[]): number {
  let randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}

let numbers = [0, 5, 10, 15, 20, 30];
// console.log(getRandomNumberElement(numbers));

function getRandomStringElement(items: string[]): string {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let colors = ['red', 'green', 'blue', 'pink'];
// console.log(getRandomStringElement(colors));

function getRandomAnyElement(items: any[]): any {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

// console.log(getRandomAnyElement(numbers));
// console.log(getRandomAnyElement(colors));

// => yes it's a solution but has a drawback
// the problem is not type safe
// so for this we will use The Generics
// to avoid duplication code while preserving the type

// how to use Generics:
// ==>>=>>

function getRandomElement<T>(items: T[]): T {
  let random = Math.floor(Math.random() * items.length);
  return items[random];
}

// both is correct the first is inferred type (type inference)
// the second is explicitly typed (type annotations)
// console.log(getRandomElement(numbers));
// console.log(getRandomElement<string>(colors));
// console.log(getRandomElement(colors));
// ---> now is type-safe

// 2. generic w/ multiple types:

function merge<T1, T2>(obj1: T1, obj2: T2) {
  return {
    ...obj2,
    ...obj1,
  };
}

let fname = { name: 'rabia', lname: 'loukhai' };
let job = { job: 'developer', salary: 12 };
// let mergeObj = merge(fname, job);
// console.log(mergeObj);

// 3. Generics Constraints:
function merge2<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}
let n = { first: 'rabia', last: 'loukhai', age2: 22 };
// let age = { age: 28 }; //generics work fine
let age = 28; //but don't prevent you when you pass not objects args
//TypeScript doesn’t issue any errors.
// so you should give U and V a constraint what type can be
let person = merge2(n, age);
// console.log(person);

function mergeAfterConstraint<U extends object, V extends object>(
  obj1: U,
  obj2: V
) {
  return {
    ...obj1,
    ...obj2,
  };
}
// let ageObj = [23, 90];
// let ageObj = { age: 23, age2: 90 };
// let person = mergeAfterConstraint(n, ageObj);
// console.log(person);

// 4. using type parameters in generic constraints

function prop<A, B extends keyof A>(obj: A, key: B) {
  return obj[key];
}
// -> now with extends keyof the compiler won't complain

// let clr = prop(colors, 2);
// let num = prop(numbers, 2);
// let nObj = prop(n, "age2");
// console.log(clr);
// console.log(num);
// console.log(nObj);
// Summary:
// Use extends keyword to constrain the type parameter to a specific type.
// Use extends keyof to constrain a type that is the property of another object.

// note that Generics work with Class

// 5. Generic Interfaces
// 1) Generic interfaces that describe object properties
interface Pair<K, V> {
  key: K;
  value: V;
}

let month: Pair<string, number> = { key: 'j', value: 3 };
// console.log(month);

// 2) Generic interfaces that describe methods
interface Collections<T> {
  add(o: T): void;
  remove(o: T): void;
}

class List<T> implements Collections<T> {
  private items: T[] = [];
  add(o: T): void {
    this.items.push(o);
  }
  remove(o: T): void {
    let index = this.items.indexOf(o);
    if (index > -1) this.items.splice(index, 1);
  }
}
let list = new List<number>();
// console.log(list);
// for (let i = 10; i > 0; i--) {
//   list.add(i);
// }
// console.log(list);

// 3) Generic interfaces that describe index types
interface Options<O> {
  [name: string]: O;
}

let inpOptions: Options<boolean> = {
  jj: true,
  kk: false,
};
// console.log(inpOptions);
