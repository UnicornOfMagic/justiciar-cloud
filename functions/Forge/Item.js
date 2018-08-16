const RarityLevels = require('./RarityLevels');
const randomstring = require('randomstring');

class Item {
  constructor(name=Item.getName()) {
    this.name = name;
    this.rarity = RarityLevels.getRandomRarity();
  }

  static getName() {
    return randomstring.generate();
  }
}

module.exports = Item;