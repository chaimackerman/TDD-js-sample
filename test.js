/* eslint-env node, mocha */

const findFreq = require('./findFreq.js');
const assert = require('assert');

it('Basic functionality', () => {
  const list = [ 23, 45, 23, 23, 45, 45, 23 ];
  assert.equal(23, findFreq.findFreq(list));
});

it('Empty List', () => {
  const list = [ ];
  assert.equal('', findFreq.findFreq(list));
});

it('One item', () => {
  const list = [ 5 ];
  assert.equal(5, findFreq.findFreq(list));
});

it('Negative items', () => {
  const list = [ -3, -3, -5 ];
  assert.equal(-3, findFreq.findFreq(list));
});

it('Huge List', () => {
  var list = [ -23 ];
  list.push(...Array.from(Array(1000).keys())); // create a range of numbers from 0 to N
  list.push(-23);
  assert.equal(-23, findFreq.findFreq(list));
});
