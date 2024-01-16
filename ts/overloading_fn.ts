/**
 * overloading function in ts
 * */ function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}
// const t = add("l", "k");
// const t2 = add(1, 9);
// console.log(t);
// console.log(t2);
