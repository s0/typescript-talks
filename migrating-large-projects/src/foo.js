const m1 = require('./some-library-module');

console.log(m1.addTogether(12));
console.log(m1.addTogether('foo'));

console.log(JSON.stringify(m1.toString(12)));
console.log(JSON.stringify(m1.toString([])));

console.log(JSON.stringify(m1.toString(12)));

console.log(m1.someAggregateFunction(12));
