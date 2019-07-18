import * as _ from 'lodash';

const result1 = _.head([1, 2, 3, 4]);
console.log(result1);
// => 1

const result2 = _.haed([]);
console.log(result2);
// => undefined