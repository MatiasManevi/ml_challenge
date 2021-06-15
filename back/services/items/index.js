const getItems = async () => {
	try {
		return 'items';
	} catch (e) {
		throw new Error(e.message);
	}
};

const getItemDetail = async () => {
	try {
		return 'item detail';
	} catch (e) {
		throw new Error(e.message);
	}
};

module.exports = {
	getItems,
	getItemDetail
};
