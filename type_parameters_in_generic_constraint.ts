function getProperty<T, U extends keyof T>(objek: T, key: U) {
  return objek[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

console.log(getProperty(x, "a"));
console.log(getProperty(x, "d"));
