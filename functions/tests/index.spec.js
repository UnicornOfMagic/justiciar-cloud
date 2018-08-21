describe('functions test', () => {
  let myFunctions;
  beforeEach(() => {
    myFunctions = require('../index');
  });
  describe('hello world', () => {
    it('should return 200 and hello', async (done) => {
      const req = {header: {type: 'GET'}};
      const res = {
        status: (status) => {
          expect(status).toEqual(200);
          return res;
        },
        json: async (body) => {
          expect(body.message).toEqual('Hello from Firebase!');
          done();
        },
      };
      myFunctions.helloWorld(req, res);
    });
  });

  describe('forge item', () => {
    it('should return an item', async (done) => {
      const req = {header: {type: 'GET'}};
      const res = {
        status: (status) => {
          expect(status).toEqual(200);
          return res;
        },
        json: async (body) => {
          expect(body.message).toEqual('I made an item!');
          expect(body.item).not.toBeUndefined();
          expect(body.readout).not.toBeUndefined();
          done();
        },
      };
      myFunctions.forgeItem(req, res);
    });
  });
});
