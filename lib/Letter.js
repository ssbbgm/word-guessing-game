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

  guess(letter) {
    if(this.char.toLowerCase() === letter.toLowerCase()){
      this.visible = true;
      return true
    } else {
      return false
    }
  }

  getSolution(){
    return this.char
  }

  toString(){
    if(!this.visible){
      return '_'
    } else {
      return this.char
    }
  }
}

module.exports = Letter;
