const { check } = require("express-validator");
const { validateResults } = require("../utils/handleValidator");

const validatorCreateItem = [
  check("name").exists().notEmpty().isLength({ min: 3, max: 50 }),
  check("album").exists().notEmpty(),
  check("cover").exists().notEmpty(),
  check("artist").exists().notEmpty(),
  check("artist.name").exists().notEmpty(),
  check("artist.nickname").exists(),
  check("artist.nationality").exists(),
  check("artist.nationality").exists(),
  check("duration").exists().notEmpty(),
  check("duration.start").exists().notEmpty(),
  check("duration.end").exists().notEmpty(),
  check("mediaId").exists().notEmpty().isMongoId(),
  (req, res, next) => validateResults(req, res, next),
];

const validatorGetItem = [

  check("id").exists().notEmpty().isMongoId(),
  (req, res, next) => validateResults(req, res, next),
  
]

module.exports = { validatorCreateItem, validatorGetItem };
