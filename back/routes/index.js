const express = require('express');
const { itemsController } = require('../controllers');

const router = express.Router();

router.get('/items', itemsController.get);
router.get('/items/:id', itemsController.getById);

module.exports = router;
