const express = require('express');

const router = express.Router();

router.get('/items', (req, res) => {
	res.send('items endpoint');
});

router.get('/items/:id', (req, res) => {
	res.send('item detail endpoint');
});

module.exports = router;
