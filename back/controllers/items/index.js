const get = (req, res) => {
	res.send('items endpoint');
};

const getById = (req, res) => {
	res.send('item detail endpoint');
};

module.exports = {
	get,
	getById
};
