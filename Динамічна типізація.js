"use string";

// в рядок

// 1)
console.log(typeof String(null));
console.log(typeof String(4));

// 2) Конкетинація
console.log(typeof (5 + ""));
// Приклад
const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + "px";

// в число
// 1)
console.log(typeof Number("4"));

// 2)
console.log(typeof +"4");

// 3)
console.log(typeof parseInt("15px", 10));
// Приклад
let answ = +prompt("Hello", "");

// в булін

// 0, '', null, undefined, NaN- в фолс
// 1)
let swithcher = null;

if (swithcher) {
  console.log("Working...");
}
swithcher = 1;

if (swithcher) {
  console.log("Working...");
}

// 2)
console.log(typeof Boolean("4"));

// 3)
console.log(typeof !!"4444");
