const axios = require('axios');
const { MELI_BASE_URL } = require('../../config');
const {
	parseListItem,
	parseItemDetail,
	paginateArray
} = require('../../utils/common');

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

		const paginatedItems = paginateArray(response.data.results, limit, offset);
		const parsedItems = paginatedItems.map(parseListItem);
		const categories = await getItemsMostResultsCategories(paginatedItems);

		return {
			categories,
			items: parsedItems
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
		const [item, description] = await Promise.all([
			axios.get(`${MELI_BASE_URL}/items/${id}`),
			axios.get(`${MELI_BASE_URL}/items/${id}/description`)
		]);

		const [categories, _] = await getItemCategories(item.data);
		const parsedItems = parseItemDetail(item.data, description.data);

		return {
			categories,
			item: parsedItems
		};
	} catch (e) {
		throw new Error(e.message);
	}
};

const getItemsMostResultsCategories = async (items) => {
	const promises = [];
	let mostResults = 0;
	let categories = [];

	for (let i = 0; i < items.length; i++) {
		promises.push(getItemCategories(items[i]));
	}

	const responses = await Promise.all(promises);

	for (let i = 0; i < responses.length; i++) {
		const [categoryArray, totalItems] = responses[i];
		if (totalItems > mostResults) {
			mostResults = totalItems;
			categories = categoryArray;
		}
	}

	return categories;
};

const getItemCategories = async ({ category_id }) => {
	const { data } = await axios.get(`${MELI_BASE_URL}/categories/${category_id}`);
	return [data.path_from_root, data.total_items_in_this_category];
};

module.exports = {
	getItems,
	getItemDetail
};
