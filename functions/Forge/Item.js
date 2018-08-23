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
    let rarity = this.rarity.readout;
    let leadingAdjective = this.leadingAdjective.readout;
    let itemType = this.itemType.readout;
    let trailingAdjective = this.trailingAdjective.readout;
    rarity = rarity ? rarity + ' ' : '';
    leadingAdjective = leadingAdjective ? leadingAdjective + ' ' : '';
    itemType = itemType ? itemType + ' ' : '';
    let itemProperties = [rarity, leadingAdjective, itemType, trailingAdjective];
    let properReadout = itemProperties.join('');
    return properReadout[properReadout.length - 1] === ' ' ? properReadout.substring(0, properReadout.length - 1): properReadout;
  }
}

module.exports = Item;