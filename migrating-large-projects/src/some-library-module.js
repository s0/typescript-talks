const { makePair } = require('./another-library-module');

const addTogether = (foo) => {
  return foo + foo;
}

const toString = (value) => `${value}`;

const addToArray = (list, value) => [...list, value];

const someAggregateFunction = (value) => {
  value = makePair(value);
  value = addLengthToArray(value);
  return getFirstAndLast(value);
}

const addLengthToArray = (value) => {
  return [...value, value.length];
}

const getFirstAndLast = (value) => {
  return [value[0], value[value.length - 1]];
}

module.exports = {
  addTogether,
  toString,
  addToArray,
  someAggregateFunction,
  makePair,
}
