const { makePair } = require('./another-library-module');
const { someAggregateFunction } = require('./some-library-module.typed');

const addTogether = (foo) => {
  return foo + foo;
}

const toString = (value) => `${value}`;

const addToArray = (list, value) => [...list, value];

module.exports = {
  addTogether,
  toString,
  addToArray,
  someAggregateFunction,
  makePair,
}
