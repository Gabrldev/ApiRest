const express = require("express");
const { getItems, getItem, createItem } = require("../controllers/tracks");
const { validatorCreateItem } = require("../validator/tracks");
const customHeader = require("../middleware/customHeader");

const router = express.Router();

router.get("/", getItems);

router.post("/", validatorCreateItem, customHeader, createItem);

module.exports = router;
