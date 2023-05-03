const express = require("express");
const { getItems, getItem, createItem,updateItem,deleteItem } = require("../controllers/tracks");
const { validatorCreateItem,validatorGetItem } = require("../validator/tracks");
const customHeader = require("../middleware/customHeader");

const router = express.Router();
//listar items
router.get("/", getItems);
//crear item
router.post("/", validatorCreateItem, customHeader, createItem);
//listar item por id
router.get("/:id", validatorGetItem, getItem)
//actualizar item
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);
//eliminar item
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;
