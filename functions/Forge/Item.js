const randomstring = require('randomstring');

class Item {
  constructor(name=this.GetName()) {
    this.name = name;
  }

  GetName() {
    return randomstring.generate();
  }
}

module.exports = Item;