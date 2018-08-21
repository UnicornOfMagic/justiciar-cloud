const {TRAILING_ADJECTIVES} = require('../../Forge/ItemDetailStorage');
const TrailingAdjectives = require('../../Forge/TrailingAdjectives');

describe('Trailing Adjectives', () => {
  describe('get random adjective', () => {
    it('should return random adjective', () => {
      let randomTrailingAdjective = TrailingAdjectives.getRandomAdjective();
      expect(TRAILING_ADJECTIVES).toContain(randomTrailingAdjective);
    });
  });
});