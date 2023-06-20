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
    let sqrt = Math.sqrt(number);
    return `Квадратний корінь з ${number} дорівнює ${sqrt}.`;
}
console.log(getSqrt(9));
console.log(getSqrt("abcde"));
console.log(getSqrt(-10));
console.log(getSqrt());
