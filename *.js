const lines = 5;
let result = "";
// Кількість рядків
for (let i = 0; i <= lines; i++) {
    // Кількість зірок
  for (let j = 0; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);
