import * as m1 from './some-library-module';
import {someAggregateFunction} from './some-library-module.typed';

console.log(m1.addTogether(12));
console.log(m1.addTogether('foo'));

console.log(JSON.stringify(m1.toString(12)));
console.log(JSON.stringify(m1.toString([])));

console.log(JSON.stringify(m1.toString(12)));

console.log(someAggregateFunction(12));
