const {RARITY_LEVELS} = require('../../Forge/ItemDetailStorage');
const RarityLevels = require('../../Forge/RarityLevels');

describe('Rarity Levels', () => {
  describe('get random rarity level', () => {
    it('should return random rarity level', () => {
      let randomRarity = RarityLevels.getRandomRarity();
      expect(RARITY_LEVELS).toContain(randomRarity);
    });
  });
});