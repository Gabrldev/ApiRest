const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem,
} = require("../controllers/storage");

const { validatorGetItem } = require("../validator/storage");

router.post("/", uploadMiddleware.single("myfile"), createItem);

router.get("/", getItems);

router.get("/:id", validatorGetItem, getItem);


router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;
