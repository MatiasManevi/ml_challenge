const axios = require('axios');
const { MELI_BASE_URL } = require('../../config');

/**
 * Given a query string, it returns the amtching list of items from MELI API
 * @param {string} queryString
 * @returns Array of items
 */
const getItems = async (queryString) => {
	try {
		const response = await axios.get(
			`${MELI_BASE_URL}/sites/MLA/search?q=${queryString}`
		);
		return response.data;
	} catch (e) {
		throw new Error(e.message);
	}
};

/**
 * Given an id, it returns the proper item from MELI API
 * @param {string} id
 * @returns item
 */
const getItemDetail = async (id) => {
	try {
		const response = await axios.get(`${MELI_BASE_URL}/items/${id}`);
		const response2 = await axios.get(`${MELI_BASE_URL}/items/${id}/description`);
		return { detail: response.data, description: response2.data };
	} catch (e) {
		throw new Error(e.message);
	}
};

module.exports = {
	getItems,
	getItemDetail
};
