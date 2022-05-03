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














}


module.exports = Word;
