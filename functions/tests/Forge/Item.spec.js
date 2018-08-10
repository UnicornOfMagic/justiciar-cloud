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
});