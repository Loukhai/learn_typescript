"use strict";
/**
 * Generics
 * */
// 1. what's is it:
function getRandomNumberElement(arr) {
    let randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
}
let numbers = [0, 5, 10, 15, 20, 30];
// console.log(getRandomNumberElement(numbers));
function getRandomStringElement(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let colors = ["red", "green", "blue", "pink"];
// console.log(getRandomStringElement(colors));
function getRandomAnyElement(items) {
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
function getRandomElement(items) {
    let random = Math.floor(Math.random() * items.length);
    return items[random];
}
// both is correct the first is inferred type (type inference )
// the second is explicitly typed (type annotations)
// console.log(getRandomElement(numbers));
// console.log(getRandomElement<string>(colors));
// console.log(getRandomElement(colors));
// ---> now is type-safe
// 2. generic w/ multiple types:
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj2), obj1);
}
let fname = { name: "rabia", lname: "loukhai" };
let job = { job: "developer", salary: 12 };
// let mergeObj = merge(fname, job);
// console.log(mergeObj);
// 3. Generics Constraints:
function merge2(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let n = { first: "rabia", last: "loukhai", age2: 22 };
// let age = { age: 28 }; //generics work fine
let age = 28; //but don't prevent you when you pass not objects args
//TypeScript doesn’t issue any errors.
// so you should give U and V a constraint what type can be
let person = merge2(n, age);
// console.log(person);
function mergeAfterConstraint(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// let ageObj = [23, 90];
// let ageObj = { age: 23, age2: 90 };
// let person = mergeAfterConstraint(n, ageObj);
// console.log(person);
// 4. using type parameters in generic constraints
function prop(obj, key) {
    return obj[key];
}
let month = { key: "j", value: 3 };
class List {
    constructor() {
        this.items = [];
    }
    add(o) {
        this.items.push(o);
    }
    remove(o) {
        let index = this.items.indexOf(o);
        if (index > -1)
            this.items.splice(index, 1);
    }
}
let list = new List();
let inpOptions = {
    jj: true,
    kk: false,
};
// console.log(inpOptions);
