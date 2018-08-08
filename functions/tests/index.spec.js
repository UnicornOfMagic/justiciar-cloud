describe('index test', () => {
  let myFunctions;
  beforeEach(() => {
    myFunctions = require('../index');
  });

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
