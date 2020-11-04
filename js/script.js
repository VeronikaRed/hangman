function Player(name) {
    this.name = name;
    this.score = 0;
    this.time = 0;
}

function init() {
    reload()
    addAlphabet();
}

function reload() {
    word = "";
    attempts = 7;
    numberSecretWord = Math.floor(Math.random() * arrayWords.length);
    secretWord = arrayWords[numberSecretWord];
    for (i = 1; i <= secretWord.length; i++) {
        word += "_";
    }
    $("#amount_attempts").html(attempts);
    $("#secret_word").html(word);
}

function addAlphabet() {
    for (let i = 0; i < arrAlphabetLetters.length; i++) {
        $(".click_button").append(`<button class='click'>${arrAlphabetLetters[i]}</button>`);
    }
    listenerClick()
}

function listenerClick() {
    $(".click").on("click", function (event) {
        showLetter(event.target)
    })
}

function showLetter(button) {
    let letter = button.innerHTML;
    button.disabled = true;
    if (secretWord.includes(letter)) {
        word = fillSuitableLetter(letter, word, secretWord);
        $("#secret_word").html(word);
        checkFinishWord();
    } else {
        attempts--;
        $("#amount_attempts").html(attempts);
        differentPicture();
    }
    changeColor(button);
}

function checkFinishWord() {
    if (secretWord == word) {
        restart()
    }
}

function fillSuitableLetter(letter, word, secret) {
    if (secret.indexOf(letter) >= 0) {
        let cutWordStart = word.slice(0, secret.indexOf(letter));
        let cutSecretWordEnd = secret.slice(secret.indexOf(letter) + 1, word.length);
        let cutWordEnd = word.slice(secret.indexOf(letter) + 1, word.length);
        return cutWordStart + letter + fillSuitableLetter(letter, cutWordEnd, cutSecretWordEnd);
    } else {
        return word;
    }
}

function changeColor(button) {
    button.style.background = '#DC143C';
}

function differentPicture() {
    if (attempts > 0) {
        $('#picture').attr("src", "images/" + arrayPicture[attempts]);
    } else if (attempts == 0) {
        $('#picture').attr("src", "images/" + arrayPicture[0]);
        restart()
    }
}

function restart() {
    $('.main_first').append(`<div id="newNode"><div>Твое слово <b>${secretWord}</b>. 
    Ты использовал <b> ${7 - attempts}</b> попыток.
    <button class="click more">Restart Game</button>
    </div></div>`);

    
    user.score = 7 - attempts;
    $('.click').prop("disabled", true);
    $('.more').prop("disabled", false);
    $('.more').on('click', function () {
        deactivation();
    })
}

function deactivation() {
    $('#picture').attr("src", "images/game-start-.jpg");
    $('.click').css('background', 'rgb(255, 60, 0)');
    $('.click').prop("disabled", false);
    $('#newNode').remove();
    reload();
}
let arrayPicture = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"];
let arrayWords = ["солнце", "инструмент", "интересующий", "капитан", "воспользовался", "человек"];
let attempts, numberSecretWord, secretWord, word;
let arrAlphabetLetters = ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й",
    "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ",
    "ъ", "ы", "ь", "э", "ю", "я"];
let player = new Player(prompt('Enter your name', ' '));
let players = [];
players.push(player);

$('.starter').on('click', function(){
    init();
})

