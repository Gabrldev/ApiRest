const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { createItem, getItems } = require("../controllers/storage");

router.post("/", uploadMiddleware.single("myfile"),createItem);

router.get('/',getItems)

module.exports = router;
