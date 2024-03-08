// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати.
// За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень».

const userName = prompt('Enter your name');
const totalPrice = prompt ('Enter your sum');

 function showPayment(){ //приймаю дані
    alert (`«Дякуємо, ${userName}! До сплати ${totalPrice} гривень.»`)
 };

const result = showPayment(userName, totalPrice ); //люди вводять дані
console.log(result);