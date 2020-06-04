
let attempts = 6;
let arrayWords = ["солнце", "инструмент", "интересующий", "капитан", "воспользовался", "человек"];
let numberSecretWord = Math.floor (Math.random() * arrayWords.length);
let secretWord = arrayWords[numberSecretWord];

let word = ""
  for (i = 1; i<= secretWord.length; i++){
    word += "_"
  }

document.getElementById("try").innerHTML = attempts
document.getElementById("input").value = word


function showLetter(clicked_id){
  let letter = document.getElementById(clicked_id).innerHTML;
  if (secretWord.i  >= 0){
      let cutWordStart = word.slice(0,secretWord.indexOf(letter));                   //1
      let cutWordEnd = word.slice(secretWord.indexOf(letter)+1, word.length)         //2
      word = cutWordStart + letter + cutWordEnd                                      //3
      document.getElementById("input").value = word
        } else {
            attempts--
            document.getElementById("try").innerHTML = attempts
      }
      changeColor(clicked_id);
}

function changeColor(clicked_id){
    let button = document.getElementById(clicked_id);
    button.style.background= '#DC143C';
  }
