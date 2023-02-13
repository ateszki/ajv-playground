const Ajv = require("ajv");
const ajv = new Ajv();

const { simpleSchema, renameSchema } = require("./schemas");

const simpleValidator = ajv.compile(simpleSchema);
const renameValidator = ajv.compile(renameSchema);

module.exports = {
  simpleValidator,
  renameValidator,
};