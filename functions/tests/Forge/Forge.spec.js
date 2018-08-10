const Forge = require('../../Forge/Forge');
const forge = new Forge();

describe('Forge tests', () => {
  it('Should return an Item', () => {
    let item = forge.forgeItem();
    expect(typeof item).toEqual('object');
  })
});
