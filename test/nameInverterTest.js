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
  it("Should return a single name when passed a single name with extra spaces", function() {
    const string = "  name  ";
    const expectedOutput = "name";
    assert.equal(nameInverter(string), expectedOutput);
  });
  it("return a last-name, first-name when passed a first and last-name", function() {
    const string = "alex hladun";
    const expectedOutput = "hladun, alex";
    assert.equal(nameInverter(string), expectedOutput);
  });
  it("return a last-name, first-name when passed a first and last-name with extra spaces around the names ", function() {
    const string = "  alex   hladun     ";
    const expectedOutput = "hladun, alex";
    assert.equal(nameInverter(string), expectedOutput);
  });
  it("return an empty string when passed a single honorific.", function() {
    const string = "   Dr. ";
    const expectedOutput = "";
    assert.equal(nameInverter(string), expectedOutput);
  });
  it("return honorific first-name when passed honorific first-name", function() {
    const string = "Dr. First";
    const expectedOutput = "Dr. First";
    assert.equal(nameInverter(string), expectedOutput);
  });
  it("return a honorific last-name, first-name when passed honorific first-name last-name", function() {
    const string = "Dr. First-Name Last-Name";
    const expectedOutput = "Dr. Last-Name, First-Name";
    assert.equal(nameInverter(string), expectedOutput);
  });
  it("return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words", function() {
    const string = "  Dr.   First-Name    Last-Name  ";
    const expectedOutput = "Dr. Last-Name, First-Name";
    assert.equal(nameInverter(string), expectedOutput);
  });
  it("throw an error when name is undefined", function() {
    const string = undefined;
    // const expectedOutput = 'throw Error';
    assert.equal(nameInverter(string), 'throw Error');
  });

  

});