let inputWords = document.getElementById('inputWords');
let inputCenzor = document.getElementById('inputCenzor');
let addBtn = document.getElementById('addBtn');
let resetBtn = document.getElementById('resetBtn');
let cenzorBtn = document.getElementById('cenzorBtn');
let badWordsList = document.getElementById('badWordsList');
let badWords = ['java', 'tottenham'];
addBtn.addEventListener('click', function addBadWord() {
    let word = inputWords.value;
    if (word === '') {
        alert('Будь ласка введіть слово');
        return;
    }
    badWords.push(word);
    updateBadWords();
    inputWords.value = '';
});
resetBtn.addEventListener('click', function removeBadWords() {
    badWords = [];
    updateBadWords();
});
function updateBadWords() {
    badWordsList.innerHTML = `<b>Bad words</b>:${badWords}`;
}
cenzorBtn.addEventListener('click', function () {
    let text = inputCenzor.value;
    if (text === '') {
        alert('Будь ласка введіть слово');
        return;
    }
    let censoredText = text;
    for (const word of badWords) {
        const censorPattern = new RegExp(`\\b${word}\\b`, 'gi');
        censoredText = censoredText.replace(censorPattern, '*'.repeat(word.length));
    }
    inputCenzor.value = censoredText;
});
updateBadWords();
