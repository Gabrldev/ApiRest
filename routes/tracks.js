const express = require('express');
const { getItems, getItem,createItem } = require('../controllers/tracks');

const router = express.Router();

router.get('/', getItems )

router.post('/', createItem )

module.exports = router;