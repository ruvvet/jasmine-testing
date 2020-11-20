describe('Hello World', function () {
  //const printThis = require('../lib/helloworld');
  it('should return hello world', function () {


    let result = printThis();
    expect(result).toEqual('Hello World');
  });
});
