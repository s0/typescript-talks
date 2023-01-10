import { makePair } from './another-library-module';

export const someAggregateFunction = <T>(value: T) => {
  const pair = makePair(value);
  const pairAndLength = addLengthToArray(pair);
  return getFirstAndLast(pairAndLength);
}

const addLengthToArray = <T>(value: T[]): (T | number)[] => {
  return [...value, value.length];
}

const getFirstAndLast = <T>(value: T[]): [T, T] => {
  return [value[0], value[value.length - 1]];
}