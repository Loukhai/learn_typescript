/**
 * Interface
 *  */
// basic interface
// is simply a named set of properties that describe a shape of an object
// By convention, the interface names are in the camel case.
var person1 = {
    name: 'rabia',
    age: 29,
    id: '01'
};
// const greetingPerson2: Greeting = (n, a) => {
//   return `hello ${n} you have ${a} `;
// };
// const grb2 = greetingPerson2("y", 33);
// console.log(grb2);
var greetingPerson = function (p) {
    return "hello ".concat(p.name, " you have ").concat(p.age);
};
var grp = greetingPerson(person1);
var lowerCase;
lowerCase = function (str) {
    return str.toLowerCase();
};
console.log(lowerCase('Hi', false));
var Perso = /** @class */ (function () {
    function Perso(fnmae, lastName) {
        this.fnmae = fnmae;
        this.lastName = lastName;
    }
    Perso.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return Perso;
}());
var person2 = new Perso('John', 'Doe');
// console.log(person2.toJson());
