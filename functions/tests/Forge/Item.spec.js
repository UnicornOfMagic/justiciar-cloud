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
    expect(item.rarity).not.toBeUndefined();
  });

  it('should have a random leading adjective', () => {
    let item = new Item();
    expect(item.leadingAdjective).not.toBeUndefined();
  });
  it('should have a random trailing adjective', () => {
    let item = new Item();
    expect(item.trailingAdjective).not.toBeUndefined();
  });
  it('should have a random item type', () => {
    let item = new Item();
    expect(item.itemType).not.toBeUndefined();
  });
  it('should jsonify itself', () => {
    let item = new Item();
    let jsonifiedItem = item.jsonify();
    expect(jsonifiedItem.leadingAdjective).not.toBeUndefined();
    expect(jsonifiedItem.trailingAdjective).not.toBeUndefined();
    expect(jsonifiedItem.rarity).not.toBeUndefined();
    expect(jsonifiedItem.itemType).not.toBeUndefined();
  });
  it('should read out full item name', () => {
    let item = new Item();
    item.itemType = {readout: 'test'};
    item.leadingAdjective = {readout: 'leadTest'};
    item.trailingAdjective = {readout: 'trailTest'};
    item.rarity = {readout: 'rarityTest'};

    expect(item.readOut()).toEqual('rarityTest leadTest test trailTest');
  });

  it('should properly blank without spaces if undefined property', () => {
    let item = new Item();
    item.rarity = {readout: undefined};
    item.leadingAdjective = {readout: undefined};
    item.trailingAdjective = {readout: undefined};
    item.itemType = {readout: 'helmet'};

    expect(item.readOut()).toEqual('helmet');
  });

  it('should properly blank without spaces if undefined property', () => {
    let item = new Item();
    item.rarity = {readout: 'Rare'};
    item.leadingAdjective = {readout: undefined};
    item.trailingAdjective = {readout: undefined};
    item.itemType = {readout: 'Baby Steaks'};

    expect(item.readOut()).toEqual('Rare Baby Steaks');
  })
});