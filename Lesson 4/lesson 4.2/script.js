class MyString {
    constructor(elem) {
        this.elem = elem
    }
    reverse(elem) {
        let newString = "";
        for (let i = elem.length - 1; i >= 0; i--) {
            newString += elem[i];
        }
        return newString;
    }
    ucFirst(elem) {
        let result = elem.charAt(0).toUpperCase() + elem.slice(1)
        return result
    }
    ucWords(elem){
        let words = elem.split(' ')
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        return words.join(' ');
    }
}

const str = new MyString();

console.log(str.reverse('IVAN')); //виведе 'NAVI'
console.log(str.ucFirst('arsenal')); //виведе 'Arsenal'
console.log(str.ucWords('arsenal arsenal arsenal')); //виведе 'Arsenal Arsenal Arsenal'

