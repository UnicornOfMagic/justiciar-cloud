const RARITY_LEVELS = [
  {
    name: 'Nothing',
  }, {
    name: 'Worthless',
    readout: 'Worthless',
  }, {
    name: 'Garbage',
    readout: 'Garbage',
  }, {
    name: 'Awful',
    readout: 'Awful',
  }, {
    name: 'Terrible',
    readout: 'Terrible',
  }, {
    name: 'Potato',
    readout: 'Potato',
  }, {
    name: 'Meh',
    readout: 'Meh',
  }, {
    name: 'Generic',
    readout: 'Generic',
  }, {
    name: 'Common',
    readout: 'Common',
  }, {
    name: 'Rare',
    readout: 'Rare',
  }, {
    name: 'Legendary',
    readout: 'Legendary',
  }, {
    name: 'Ancient',
    readout: 'Ancient',
  }, {
    name: 'Demonic',
    readout: 'Demonic',
  }];

const LEADING_ADJECTIVES = [
  {
    name: 'Nothing',
  }, {
    name: 'Flaming',
    readout: 'Flaming',
  }, {
    name: 'Freezing',
    readout: 'Freezing',
  }, {
    name: 'Sparking',
    readout: 'Sparking',
  }, {
    name: 'Dull',
    readout: 'Dull',
  }, {
    name: 'Lame',
    readout: 'Lame',
  }, {
    name: 'Weak',
    readout: 'Weak',
  }, {
    name: 'Potato',
    readout: 'Potato',
  }, {
    name: 'Shiny',
    readout: 'Shiny',
  }, {
    name: 'Special',
    readout: 'Special',
  }, {
    name: 'Magical',
    readout: 'Magical',
  }, {
    name: 'Amazing',
    readout: 'Amazing',
  }, {
    name: 'Stupid',
    readout: 'Stupid',
  }, {
    name: 'Awful',
    readout: 'Awful',
  }, {
    name: 'Terrible',
    readout: 'Terrible',
  }, {
    name: 'Garbage',
    readout: 'Garbage',
  }, {
    name: 'Crippling',
    readout: 'Crippling',
  }, {
    name: 'Lacerating',
    readout: 'Lacerating',
  }, {
    name: 'Antagonizing',
    readout: 'Antagonizing',
  }, {
    name: 'Terrifying',
    readout: 'Terrifying',
  }, {
    name: 'Gazing',
    readout: 'Gazing',
  }, {
    name: 'Generic',
    readout: 'Generic',
  },
];

const TRAILING_ADJECTIVES = [
  {
    name: 'Nothing',
  }, {
    name: 'Justice',
    readout: 'of Justice',
  }, {
    name: 'Potatoes',
    readout: 'of Potatoes',
  }, {
    name: 'Harming',
    readout: 'of Harming',
  }, {
    name: 'Thorns',
    readout: 'of Thorns',
  }, {
    name: 'Blasphemy',
    readout: 'of Blasphemy',
  }, {
    name: 'Damnation',
    readout: 'of Damnation',
  }, {
    name: 'Smiting',
    readout: 'of Smiting',
  }, {
    name: 'Hellfire',
    readout: 'of Hellfire',
  }, {
    name: 'Soup',
    readout: 'of Soup',
  }, {
    name: 'Grass',
    readout: 'of Grass',
  }, {
    name: 'Wind',
    readout: 'of Wind',
  }, {
    name: 'Ice',
    readout: 'of Ice',
  }, {
    name: 'Fire',
    readout: 'of Fire',
  }, {
    name: 'Narcissus',
    readout: 'of Narcissus',
  }, {
    name: 'Thunder',
    readout: 'of Thunder',
  }, {
    name: 'Lightning',
    readout: 'of Lightning',
  }, {
    name: 'Ouchies',
    readout: 'of Ouchies',
  }, {
    name: 'Pain',
    readout: 'of Pain',
  }, {
    name: 'Coolness',
    readout: 'of Coolness',
  }, {
    name: 'Destruction',
    readout: 'of Destruction',
  }, {
    name: 'Cows',
    readout: 'of the Cows',
  }, {
    name: 'Chickens',
    readout: 'of the Chickens',
  }, {
    name: 'Wilderness',
    readout: 'of Wilderness',
  }, {
    name: 'Trees',
    readout: 'of Trees',
  }, {
    name: 'Antelope',
    readout: 'of the Antelope',
  }, {
    name: 'Generic',
    readout: 'of Generic-ness',
  },
];

ITEM_TYPES = [
  {
    name: 'Sword',
    readout: 'Sword',
  }, {
    name: 'Helmet',
    readout: 'Helmet',
  }, {
    name: 'Shield',
    readout: 'Shield',
  }, {
    name: 'Boots',
    readout: 'Boots',
  }, {
    name: 'Vambraces',
    readout: 'Vambraces',
  }, {
    name: 'Pauldrons',
    readout: 'Pauldrons',
  }, {
    name: 'Gloves',
    readout: 'Gloves',
  }, {
    name: 'Armor',
    readout: 'Armor',
  }, {
    name: 'Greaves',
    readout: 'Greaves',
  }, {
    name: 'Jeans',
    readout: 'Jeans',
  }, {
    name: 'Crocs',
    readout: 'Crocs',
  }, {
    name: 'Bracers',
    readout: 'Bracers',
  }, {
    name: 'Hat',
    readout: 'Hat',
  }, {
    name: 'Sunglasses',
    readout: 'Sunglasses',
  }, {
    name: 'Monocle',
    readout: 'Monocle',
  }, {
    name: 'Tiara',
    readout: 'Tiara',
  }, {
    name: 'Crown',
    readout: 'Crown',
  }, {
    name: 'Fedora',
    readout: 'Fedora',
  }, {
    name: 'Machete',
    readout: 'Machete',
  }, {
    name: 'Dagger',
    readout: 'Dagger',
  }, {
    name: 'Bow',
    readout: 'Bow',
  }, {
    name: 'Crossbow',
    readout: 'Crossbow',
  }, {
    name: 'Potato',
    readout: 'Potato',
  }, {
    name: 'Generic',
    readout: 'Generic Item',
  }];

module.exports = {
  RARITY_LEVELS,
  LEADING_ADJECTIVES,
  TRAILING_ADJECTIVES,
  ITEM_TYPES,
};