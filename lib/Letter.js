class Letter {
  char = '';
  visible = false;
  constructor(letter){
    this.char = letter;
    if(!letter.match(/[a-z0-9]+/gi)){
      this.visible = true;
    } else {
      this.visible = false;
    }
  }
}

module.exports = Letter;
