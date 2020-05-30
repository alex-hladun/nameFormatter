const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {
  it("Should return empty string if passed an empty string", function() {
    const string = "";
    const expectedOutput = "";
    assert.equal(nameInverter(string), expectedOutput);
  });
  it("Should return single name if passed a single name", function() {
    const string = "name";
    const expectedOutput = "name";
    assert.equal(nameInverter(string), expectedOutput);
  });

});