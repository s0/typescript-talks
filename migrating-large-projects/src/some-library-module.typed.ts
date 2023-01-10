import { makePair } from './another-library-module';

export const someAggregateFunction = (value) => {
  value = makePair(value);
  value = addLengthToArray(value);
  return getFirstAndLast(value);
}
