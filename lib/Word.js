const Letter = require("./Letter");

class Word {
    word = '';
    letters = [];
    
    constructor(word){
        this.word = word;
        this.word.split('').forEach((letter) =>{
            this.letters.push(new Letter(letter));
        });
    }

    guessLetter(choice) {
        const foundSomething = this.letters.filter((letter) => {
            letter.guess(choice)
        });
        return foundSomething.length > 0
    }

    guessedCorrectly(){
        return this.getSolution() === this.letters.join('');
    }

    getSolution(){
        return this.word;
    }

    toString(){
        return this.letters.join('');
    }

}


module.exports = Word;
