export {}

// Завдання 1
let city: string;
city = "Київ";
city = "Львів"
let address: string = city;

console.log('Завдання 1',address)

// Завдання 2

let input: string | null = prompt('Введіть число');
let number: number = input !== null ? parseInt(input) : NaN;
let message: string = number === 0 ? 'Число 0' : number % 2 === 0 ? "Число парне" : "Число непарне";
console.log('Завдання 2',message)

// Завдання 3
function max(...numbers: number[]): number {
    return Math.max(...numbers);
  }
  
  console.log('Завдання 3',max(5, -2));
  console.log('Завдання 3',max(5, -2, 30, 6));

// Завдання 4
function getSqrt(number?: number | string):string {
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
    let sqrt = Math.sqrt(number);
    return `Квадратний корінь з ${number} дорівнює ${sqrt}.`;
  }
  
  console.log('Завдання 4',getSqrt(9));
  console.log('Завдання 4',getSqrt("abcde"));
  console.log('Завдання 4',getSqrt(-10));
  console.log('Завдання 4',getSqrt());
  