const simpleObject = {
  foo: 1,
  bar: "abc"
};

const renameObject = {
  type: 'rename',
  rename: [{
    column: 'column name',
  }],
};

module.exports = {
  simpleObject,
  renameObject,
};