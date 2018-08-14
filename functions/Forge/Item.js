const randomstring = require('randomstring');

class Item {
  constructor(name=Item.getName()) {
    this.name = name;
  }

  static getName() {
    return randomstring.generate();
  }
}

module.exports = Item;