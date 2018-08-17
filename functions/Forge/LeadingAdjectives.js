const {LEADING_ADJECTIVES} = require('./ItemDetailStorage');

class LeadingAdjectives {
  static getRandomAdjective() {
    return LEADING_ADJECTIVES[Math.floor(Math.random() * Math.floor(LEADING_ADJECTIVES.length))];
  }
}

module.exports = LeadingAdjectives;