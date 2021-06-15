const { itemsService } = require('../../services');

const { getItems, getItemDetail } = itemsService;

const get = async (req, res, next) => {
	try {
		const items = await getItems();
		res.send(items);
		next();
	} catch (e) {
		console.log(e.message);
		res.sendStatus(500) && next(error);
	}
};

const getById = async (req, res, next) => {
	try {
		const item = await getItemDetail();
		res.send(item);
		next();
	} catch (e) {
		console.log(e.message);
		res.sendStatus(500) && next(error);
	}
};

module.exports = {
	get,
	getById
};
