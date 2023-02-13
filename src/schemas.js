const simpleSchema = {
  type: "object",
  properties: {
    foo: {type: "integer"},
    bar: {type: "string"}
  },
  required: ["foo"],
  additionalProperties: false
}

const renameSchema = {
  type: 'object',
  required: ['rename'],
  properties: {
    rename: {
      type: 'array',
      items: {
        type: 'object',
        properties: { // not requiring either of these so you can add an empty rename potentially
          column: { type: 'string' },
          name: { type: 'string' },
        },
      },
    },
  },
};



module.exports = {
  simpleSchema,
  renameSchema,
};