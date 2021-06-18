const { currencies, conditions } = require('./constants');

const parseListItem = (item) => {
	const [amount, decimals] = parsePrice(item.price);
	const currency = parseCurrency(item.currency_id);
	const condition = parseCondition(item.condition);

	return {
		id: item.id,
		title: item.title,
		price: {
			currency,
			amount,
			decimals
		},
		picture: item.thumbnail,
		condition,
		free_shipping: item.shipping.free_shipping
	};
};

const parseItemDetail = (item, description) => {
	return {
		...parseListItem(item),
		picture: item.pictures[0].url,
		sold_quantity: item.sold_quantity,
		description: description.plain_text
	};
};

const parseCurrency = (currency_id) => {
	return currencies[currency_id];
};

const parseCondition = (condition_id) => {
	return conditions[condition_id];
};

const parsePrice = (price) => {
	const amount = Math.trunc(price);
	let decimals = Math.round((price % 1.0) * 100);

	if (decimals < 10) {
		decimals = '0' + decimals;
	}

	return [amount, decimals];
};

module.exports = {
	parseListItem,
	parseItemDetail
};
