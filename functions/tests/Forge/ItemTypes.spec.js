const {ITEM_TYPES} = require('../../Forge/ItemDetailStorage');
const ItemTypes = require('../../Forge/ItemTypes');

describe('Item Types', () => {
  describe('get random item type', () => {
    it('should return random item type', () => {
      let randomItemType = ItemTypes.getRandomItemType();
      expect(ITEM_TYPES).toContain(randomItemType);
    });
  });
});