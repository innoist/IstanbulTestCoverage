var expect = require ('chai').expect;
var calculateSum = require('./../index.js').calculateSum;
console.log(calculateSum);
require('mocha');

describe("run first test",function(){
  it('should pass when everything ok',function(){
    expect(true).to.equal(true);
  });
})

