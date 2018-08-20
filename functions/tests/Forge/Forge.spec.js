const Forge = require('../../Forge/Forge');
const forge = new Forge();

describe('Forge tests', () => {
  describe('get last made item', () => {
    it('should return null if no items have been made', () => {
      let item = forge.getLastItem();
      expect(item).toBeUndefined();
    });

    it('should return last item made', () => {
      let item = forge.forgeItem();
      expect(item).toEqual(forge.getLastItem());
    });
  });

  describe('forge item', () => {
    it('Should return an Item', () => {
      let item = forge.forgeItem();
      expect(typeof item).toEqual('object');
    });
  })
});
