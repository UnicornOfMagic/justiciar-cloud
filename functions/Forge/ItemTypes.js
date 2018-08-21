const {ITEM_TYPES} = require('./ItemDetailStorage');

class ItemTypes {
  static getRandomItemType() {
    return ITEM_TYPES[Math.floor(Math.random() * Math.floor(ITEM_TYPES.length))];
  }
}

module.exports = ItemTypes;