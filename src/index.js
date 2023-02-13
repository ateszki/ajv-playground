const validators = require("./validators");
const objects = require("./objects");
const argv = require('minimist')(process.argv.slice(2));

const validator = validators[argv.v] || validators.simpleValidator;
const object = objects[argv.o] || objects.simpleObject;

const valid = validator(object);

console.log('Validating this object');
console.log(object);
console.log('-----------------------')
console.log('with this schema');
console.log(validator.schema);


if (!valid) {
  console.log(valid.errors);
} else {
  console.log('Is valid schema')
}