const msg = document.querySelector('.msg');
console.log(msg);

const guess = document.querySelector('input');
console.log(guess);

const btn = document.querySelector('.btn');
console.log(btn);

let play = false;
let newWords = "";
let randomWords = "";

let words = ["javascript","java","python","google","amazon","apple","orange","papaya","pineapple","watermelon","cricket",
"football","facebook","waseem","idrees","nayeem","sameer","afridi","salman"];

const createNewWords = () => {
    // console.log(words[0]);
    let randomNum = Math.floor(Math.random() * words.length);
    // console.log(randomNum);
    let newTempWords = words[randomNum];
    // console.log(newTempWords.split(""));
    return newTempWords;
}

const  scrambleWords = (arr) => {

    for(i= arr.length-1; i>0; i--) {
        let temp = arr[i];
        // console.log(temp);
        let j = Math.floor(Math.random() * (i+1));
        // console.log(i);
        // console.log(j);
       arr[i] = arr[j];
       arr[j] = temp;
    }
    return arr;
}

btn.addEventListener('click', function() {
  if(!play) {
    play = true;
    btn.innerHTML = "GUESS";
    guess.classList.toggle('hidden');
    newWords = createNewWords();
    randomWords = scrambleWords(newWords.split("")).join("");
    // console.log(randomWords.join(""));
    msg.innerHTML = `Guess the word :${randomWords}`;
  } else {
        let tempWord = guess.value;
          if(tempWord === newWords) {
            // console.log("correct");
            play = false;
            msg.innerHTML = `Wow! You Guessed it right. It is ${newWords}`;
            btn.innerHTML = "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";
          }
          else {
            // console.log("wrong guessing");
            msg.innerHTML = `Sorry Its wrong, Try Again : ${randomWords}`;
          }
  }
});
