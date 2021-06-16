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
 * @param {*} next
 */
const get = async (req, res, next) => {
	try {
		const { search } = req.query;
		const items = await getItems(search);
		res.send(items);
		next();
	} catch (e) {
		console.error(e);
		res.sendStatus(500);
	}
};

/**
 * Given an id, it returns a detailed item record
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const item = await getItemDetail(id);
		res.send(item);
		next();
	} catch (e) {
		console.error(e.message);
		res.sendStatus(500);
	}
};

module.exports = {
	get,
	getById
};
