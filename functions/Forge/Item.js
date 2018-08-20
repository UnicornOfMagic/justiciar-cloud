const RarityLevels = require('./RarityLevels');
const LeadingAdjectives = require('./LeadingAdjectives');
const TrailingAdjectives = require('./TrailingAdjectives');
const randomstring = require('randomstring');

class Item {
  constructor(name=Item.getName()) {
    this.name = name;
    this.rarity = RarityLevels.getRandomRarity();
    this.leadingAdjective = LeadingAdjectives.getRandomAdjective();
    this.trailingAdjective = TrailingAdjectives.getRandomAdjective();
  }

  static getName() {
    return randomstring.generate();
  }
}

module.exports = Item;