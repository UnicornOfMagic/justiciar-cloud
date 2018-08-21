const {LEADING_ADJECTIVES} = require('../../Forge/ItemDetailStorage');
const LeadingAdjectives = require('../../Forge/LeadingAdjectives');

describe('Leading Adjectives', () => {
  describe('get random adjective', () => {
    it('should return random adjective', () => {
      let randomLeadingAdjectives = LeadingAdjectives.getRandomAdjective();
      expect(LEADING_ADJECTIVES).toContain(randomLeadingAdjectives);
    });
  });
});