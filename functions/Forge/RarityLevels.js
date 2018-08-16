const {RARITY_LEVELS} = require('./ItemDetailStorage');

class RarityLevels {
  static getRandomRarity() {
    return RARITY_LEVELS[Math.floor(Math.random() * Math.floor(RARITY_LEVELS.length))];
  }
}

module.exports = RarityLevels;