// Створити змінну для зберігання числа.
// Використати метод Math.sqrt() для обчислення квадратного кореня числа та вивести результат в консоль.

// 1 - function declaration
// function sqrtNumber (number){
//      const findNumber = Math.sqrt(number);
//      return findNumber;
// }

// const result = sqrtNumber(25);
// function sqrtNumber (number){
//       const findNumber = Math.sqrt(number);
//       return findNumber;
// }
// console.log(result);


//2 - function expression
const sqrtNumber = (number) => {
    const findNumber = Math.sqrt(number);
    return findNumber;
}
const result = sqrtNumber(25);
console.log(result);