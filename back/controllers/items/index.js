/**
 * Contollers - take request object, pull out data from request, then send to service(s).
 * Express logic "ends" right here in the controllers. Services and lower layers knows nothing about upper layers.
 */

const { itemsService } = require('../../services');

const { getItems, getItemDetail } = itemsService;

/**
 * Given a search query, it Returns an array of items that matches it
 * @param {*} req
 * @param {*} res
 */
const get = async (req, res) => {
	try {
		const { search, category, limit, offset } = req.query;
		const items = await getItems(search, category, limit, offset);
		res.send(items);
	} catch (e) {
		console.error(e);
		res.sendStatus(500);
	}
};

/**
 * Given an id, it returns a detailed item record
 * @param {*} req
 * @param {*} res
 */
const getById = async (req, res) => {
	try {
		const { id } = req.params;
		const item = await getItemDetail(id);
		res.send(item);
	} catch (e) {
		console.error(e.message);
		res.sendStatus(500);
	}
};

module.exports = {
	get,
	getById
};
