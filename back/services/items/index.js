const axios = require('axios');
const { MELI_BASE_URL } = require('../../config');
const { parseListItem, parseItemDetail } = require('../../utils/parsers');

/**
 * Given a query string, it returns the amtching list of items from MELI API
 * @param {string} queryString
 * @param {number} limit
 * @param {number} offset
 */
const getItems = async (queryString, limit, offset = 0) => {
	try {
		const response = await axios.get(
			`${MELI_BASE_URL}/sites/MLA/search?q=${queryString}`
		);
		return {
			categories: [],
			items: response.data.results.slice(offset, limit).map(parseListItem)
		};
	} catch (e) {
		throw new Error(e.message);
	}
};

/**
 * Given an id, it returns the proper item from MELI API
 * @param {string} id
 */
const getItemDetail = async (id) => {
	try {
		const item = await axios.get(`${MELI_BASE_URL}/items/${id}`);
		const description = await axios.get(`${MELI_BASE_URL}/items/${id}/description`);
		return { item: parseItemDetail(item.data, description.data) };
	} catch (e) {
		throw new Error(e.message);
	}
};

module.exports = {
	getItems,
	getItemDetail
};
