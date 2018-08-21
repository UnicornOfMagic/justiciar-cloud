const Item = require('../../Forge/Item');

jest.mock('randomstring', () => {
  return {
    generate: () => {return 'random';},
  };
});

describe('Item', () => {
  it('should make item with given name', () => {
    let item = new Item('boi');
    expect(item.name).toEqual('boi');
  });

  it('should make item with random name if not given one', () => {
    let item = new Item();
    expect(item.name).toEqual('random');
  });

  it('should have a random rarity', () => {
    let item = new Item();
    expect(item.rarity).not.toBeNull();
  });

  it('should have a random leading adjective', () => {
    let item = new Item();
    expect(item.leadingAdjective).not.toBeNull();
  });
  it('should have a random trailing adjective', () => {
    let item = new Item();
    expect(item.trailingAdjective).not.toBeNull();
  });
  it('should jsonify itself', () => {
    let item = new Item();
    let jsonifiedItem = item.jsonify();
    expect(jsonifiedItem.leadingAdjective).not.toBeUndefined();
    expect(jsonifiedItem.trailingAdjective).not.toBeUndefined();
    expect(jsonifiedItem.rarity).not.toBeUndefined();
  });
});