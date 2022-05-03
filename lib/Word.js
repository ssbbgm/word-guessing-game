const Letter = require("./Letter");

class Word {
    word = '';
    letters = [];
    
    constructor(word){
        this.word = word;
        this.word.spliit('').forEach((letter) =>{
            this.letters.push(new Letter(letter));
        });
    }

    guessLetter(choice) {
        const foundSomething = this.letters.filter((letter) => {
            letter.guess(choice)
        });
        return foundSomething.length > 0;
    }












}


module.exports = Word;
