import { makePair } from './another-library-module';

export const someAggregateFunction = (value) => {
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