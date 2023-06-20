"use strict";

// Завдання 1
var city;
city = "Київ";
city = "Львів";
var address = city;
console.log('Завдання 1', address);
// Завдання 2
var input = prompt('Введіть число');
var number = input !== null ? parseInt(input) : NaN;
var message = number === 0 ? 'Число 0' : number % 2 === 0 ? "Число парне" : "Число непарне";
console.log('Завдання 2', message);
// Завдання 3
function max() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return Math.max.apply(Math, numbers);
}
console.log('Завдання 3', max(5, -2));
console.log('Завдання 3', max(5, -2, 30, 6));
// Завдання 4
function getSqrt(number) {
    if (typeof number === 'undefined') {
        return "Будь ласка, введіть число!";
    }
    if (typeof number !== 'number') {
        return "Повинно бути числове значення.";
    }
    if (number < 0) {
        return "Введіть додатнє число.";
    }
    if (isNaN(number)) {
        return "Будь ласка, введіть число!";
    }
    var sqrt = Math.sqrt(number);
    return "\u041A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0438\u0439 \u043A\u043E\u0440\u0456\u043D\u044C \u0437 ".concat(number, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(sqrt, ".");
}
console.log('Завдання 4', getSqrt(9));
console.log('Завдання 4', getSqrt("abcde"));
console.log('Завдання 4', getSqrt(-10));
console.log('Завдання 4', getSqrt());
