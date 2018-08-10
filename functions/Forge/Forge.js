const Item = require('./Item');

class Forge {
  constructor() {
    let lastItemMade = null;
  }
  forgeItem() {
    let item = new Item();
    this.lastItemMade = item;
    return item;
  }

  getLastItem() {
    return this.lastItemMade;
  }
}

module.exports = Forge;