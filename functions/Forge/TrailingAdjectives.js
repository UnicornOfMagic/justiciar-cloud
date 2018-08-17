const {TRAILING_ADJECTIVES} = require('./ItemDetailStorage');

class TrailingAdjectives {
  static getRandomAdjective() {
    return TRAILING_ADJECTIVES[Math.floor(Math.random() * Math.floor(TRAILING_ADJECTIVES.length))];
  }
}

module.exports = TrailingAdjectives;