const RarityLevels = require('./RarityLevels');
const LeadingAdjectives = require('./LeadingAdjectives');
const TrailingAdjectives = require('./TrailingAdjectives');
const ItemTypes = require('./ItemTypes');
const randomstring = require('randomstring');

class Item {
  constructor(name = Item.getName()) {
    this.name = name;
    this.rarity = RarityLevels.getRandomRarity();
    this.leadingAdjective = LeadingAdjectives.getRandomAdjective();
    this.trailingAdjective = TrailingAdjectives.getRandomAdjective();
    this.itemType = ItemTypes.getRandomItemType();
  }

  static getName() {
    return randomstring.generate();
  }

  jsonify() {
    return {
      name: this.name,
      rarity: this.rarity.name,
      leadingAdjective: this.leadingAdjective.name,
      trailingAdjective: this.trailingAdjective.name,
      itemType: this.itemType.name,
    };
  }

  readOut() {
    return `${this.leadingAdjective.readout} ${this.rarity.readout} ${this.itemType.readout} ${this.trailingAdjective.readout}`;
  }
}

module.exports = Item;