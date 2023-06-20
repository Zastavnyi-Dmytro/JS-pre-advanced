let inputWords = document.getElementById('inputWords') as HTMLInputElement;
let inputCenzor = document.getElementById('inputCenzor') as HTMLInputElement;
let addBtn = document.getElementById('addBtn') as HTMLButtonElement
let resetBtn = document.getElementById('resetBtn') as HTMLButtonElement
let cenzorBtn = document.getElementById('cenzorBtn') as HTMLButtonElement
let badWordsList = document.getElementById('badWordsList') as HTMLParagraphElement
let badWords: string[] = ['java', 'tottenham']


addBtn.addEventListener('click', function addBadWord() {
    let word = inputWords.value
    if (word === '') {
        alert('Будь ласка введіть слово')
        return
    }
    badWords.push(word)
    updateBadWords()
    inputWords.value = ''
})

resetBtn.addEventListener('click', function removeBadWords() {
    badWords = []
    updateBadWords()
})

function updateBadWords(): void {
    badWordsList.innerHTML = `<b>Bad words</b>:${badWords}`;
}

cenzorBtn.addEventListener('click', function () {
    let text = inputCenzor.value
    if (text === '') {
        alert('Будь ласка введіть слово')
        return
    }
    let censoredText = text;
    for (const word of badWords) {
        const censorPattern = new RegExp(`\\b${word}\\b`, 'gi');
        censoredText = censoredText.replace(censorPattern, '*'.repeat(word.length));
    }
    inputCenzor.value = censoredText
})

updateBadWords()