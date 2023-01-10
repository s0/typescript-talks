
export const someAggregateFunction = (value) => {
  value = makePair(value);
  value = addLengthToArray(value);
  return getFirstAndLast(value);
}
