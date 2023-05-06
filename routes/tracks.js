const express = require('express')
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks')
const { validatorCreateItem, validatorGetItem } = require('../validator/tracks')
const authMiddleware = require('../middleware/session')
const checkRol = require('../middleware/rol')

const router = express.Router()
// listar items
router.get('/', authMiddleware, getItems)
// crear item
router.post('/', authMiddleware, checkRol(['admin']), validatorCreateItem, createItem)
// listar item por id
router.get('/:id', validatorGetItem, getItem)
// actualizar item
router.put('/:id', validatorGetItem, validatorCreateItem, updateItem)
// eliminar item
router.delete('/:id', validatorGetItem, deleteItem)

module.exports = router
