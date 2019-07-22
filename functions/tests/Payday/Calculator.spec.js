const Calculator = require('../../Payday/Calculator');
const calculator = new Calculator();

describe('Calculator tests', () => {
  describe('calculateNextPayDay', () => {
    it('should return the 6th when the first', () => {
      let payDay = calculator.calculateNextPayDay(new Date('02-01-2019'));
      expect(payDay.getDate()).toBe(6);
    });

    it('should return the 21st when the 8th', () => {
      let payDay = calculator.calculateNextPayDay(new Date('01-08-2019'));
      expect(payDay.getDate()).toBe(21);
    });

    it('should return the 4th when the 6th falls on a Sunday', () => {
      let payDay = calculator.calculateNextPayDay(new Date('01-01-2019'));
      expect(payDay.getDate()).toBe(4);
    })

    it('should return the 6th of the next month when after the 21st', () => {
      let payDay = calculator.calculateNextPayDay(new Date('01-22-2019'));
      expect(payDay.getMonth()).toBe(1);
    })

    it('should return January 6th of next year when beyond the last payday', () => {
      let payDay = calculator.calculateNextPayDay(new Date('12-22-2019'));
      expect(payDay.getFullYear()).toBe(2020);
      expect(payDay.getMonth()).toBe(0);
      expect(payDay.getDate()).toBe(6);
    })
  });
});
